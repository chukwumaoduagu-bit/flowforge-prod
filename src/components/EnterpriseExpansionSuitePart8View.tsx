import React, { useState, useMemo } from 'react';
import {
  Globe as GlobeIcon,
  Target as TargetIcon,
  Cpu as CpuIcon,
  Sparkles as SparklesIcon,
  ShieldCheck as ShieldCheckIcon,
  CheckCircle2 as CheckCircle2Icon,
  AlertTriangle as AlertTriangleIcon,
  TrendingUp as TrendingUpIcon,
  Layers as LayersIcon,
  Award as AwardIcon,
  BookOpen as BookOpenIcon,
  Users as UsersIcon,
  Flame as FlameIcon,
  Clock as ClockIcon,
  ArrowRight as ArrowRightIcon,
  Copy as CopyIcon,
  Printer as PrinterIcon,
  RefreshCw as RefreshCwIcon,
  Sliders as SlidersIcon,
  Zap as ZapIcon,
  Check as CheckIcon,
  FileText as FileTextIcon,
  Activity as ActivityIcon,
  BarChart3 as BarChart3Icon,
  HeartHandshake as HeartHandshakeIcon,
  CalendarCheck as CalendarCheckIcon
} from 'lucide-react';
import {
  FLOWFORGE_GLOBAL_EXPANSION_STRATEGY,
  FLOWFORGE_CATEGORY_DOMINATION_PLAN,
  FLOWFORGE_SIMULATION_ENGINES_SEED,
  FLOWFORGE_STABILITY_EVOLUTION,
  FLOWFORGE_STABILITY_3_PILLARS,
  FLOWFORGE_STABILITY_3_OUTCOMES,
  ExpansionPhase,
  DominationStep,
  SimulationEngineConfig
} from '../data/expansionSuitePart8Data';

interface EnterpriseExpansionSuitePart8ViewProps {
  onNavigateToStability?: () => void;
  onNavigateToPart1?: () => void;
  onNavigateToPart2?: () => void;
  onNavigateToPart3?: () => void;
  onNavigateToPart4?: () => void;
  onNavigateToPart5?: () => void;
  onNavigateToPart6?: () => void;
  onNavigateToPart7?: () => void;
  onNavigateToPart9?: () => void;
  onNavigateToMasterBusinessPlan?: () => void;
  onNavigateToTotalBusinessArchitecture?: () => void;
}

type TabType = 'global_expansion' | 'category_domination' | 'autonomy_simulation' | 'stability_os_3' | 'consolidated_dossier';

export const EnterpriseExpansionSuitePart8View: React.FC<EnterpriseExpansionSuitePart8ViewProps> = ({
  onNavigateToStability,
  onNavigateToPart1,
  onNavigateToPart2,
  onNavigateToPart3,
  onNavigateToPart4,
  onNavigateToPart5,
  onNavigateToPart6,
  onNavigateToPart7,
  onNavigateToPart9,
  onNavigateToMasterBusinessPlan,
  onNavigateToTotalBusinessArchitecture
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('global_expansion');
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState<number>(0);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Simulation State
  const [teamLoad, setTeamLoad] = useState<number>(94); // 40 - 120%
  const [baseSlack, setBaseSlack] = useState<number>(11); // 5 - 35%
  const [dependencyComplexity, setDependencyComplexity] = useState<'Low' | 'Medium' | 'High' | 'Extreme'>('High');
  const [burnoutSignals, setBurnoutSignals] = useState<'Low' | 'Balanced' | 'Aggressive'>('Balanced');
  const [velocityVariance, setVelocityVariance] = useState<number>(28); // 10 - 50%
  const [activeEngines, setActiveEngines] = useState<SimulationEngineConfig[]>(FLOWFORGE_SIMULATION_ENGINES_SEED);
  const [forwardForecastHorizon, setForwardForecastHorizon] = useState<number>(60); // 30, 60, 90 days

  // Toggle individual engine in simulation
  const handleToggleEngine = (engineId: string) => {
    setActiveEngines(prev =>
      prev.map(eng => (eng.id === engineId ? { ...eng, active: !eng.active } : eng))
    );
  };

  // Toggle all engines
  const handleToggleAllEngines = (enable: boolean) => {
    setActiveEngines(prev => prev.map(eng => ({ ...eng, active: enable })));
  };

  // Simulation presets
  const applyPreset = (type: 'crisis' | 'fragile' | 'flowforge_ideal') => {
    if (type === 'crisis') {
      setTeamLoad(115);
      setBaseSlack(6);
      setDependencyComplexity('Extreme');
      setBurnoutSignals('Aggressive');
      setVelocityVariance(42);
      setActiveEngines(prev => prev.map(e => ({ ...e, active: false })));
    } else if (type === 'fragile') {
      setTeamLoad(98);
      setBaseSlack(10);
      setDependencyComplexity('High');
      setBurnoutSignals('Balanced');
      setVelocityVariance(32);
      setActiveEngines(prev => prev.map((e, idx) => ({ ...e, active: idx < 3 })));
    } else {
      setTeamLoad(82);
      setBaseSlack(18);
      setDependencyComplexity('Medium');
      setBurnoutSignals('Balanced');
      setVelocityVariance(12);
      setActiveEngines(prev => prev.map(e => ({ ...e, active: true })));
    }
  };

  // Real-time Simulation Engine Calculations
  const simulationResults = useMemo(() => {
    const activeCount = activeEngines.filter(e => e.active).length;
    const totalImpact = activeEngines
      .filter(e => e.active)
      .reduce((sum, e) => sum + e.stabilityImpact, 0);
    const totalBurnoutRed = activeEngines
      .filter(e => e.active)
      .reduce((sum, e) => sum + e.burnoutReduction, 0);
    const totalCpBoost = activeEngines
      .filter(e => e.active)
      .reduce((sum, e) => sum + e.criticalPathBoost, 0);
    const totalVelBoost = activeEngines
      .filter(e => e.active)
      .reduce((sum, e) => sum + e.velocityStabilityBoost, 0);

    // Complexity penalty
    const complexityPenalty =
      dependencyComplexity === 'Low' ? 0 :
      dependencyComplexity === 'Medium' ? 6 :
      dependencyComplexity === 'High' ? 14 : 22;

    // Base raw stability calculation
    let rawScore = 100 - (teamLoad > 85 ? (teamLoad - 85) * 1.6 : 0) - (baseSlack < 15 ? (15 - baseSlack) * 2.2 : 0) - complexityPenalty;
    rawScore = Math.max(28, Math.min(100, Math.round(rawScore + totalImpact * 0.72)));

    // Burnout index calculation
    let rawBurnout = (teamLoad * 0.65) + (velocityVariance * 0.4) - (baseSlack * 1.1);
    rawBurnout = Math.max(12, Math.min(96, Math.round(rawBurnout * (1 - (totalBurnoutRed / 160)))));

    // Critical Path Health
    let rawCp = 100 - complexityPenalty * 1.8 - (teamLoad > 90 ? (teamLoad - 90) : 0);
    rawCp = Math.max(30, Math.min(99, Math.round(rawCp + totalCpBoost * 0.45)));

    // Velocity stability forecast (variance %)
    let rawVar = Math.max(6, Math.min(48, Math.round(velocityVariance * (1 - (totalVelBoost / 140)))));

    // Slack Liquidity Available
    const slackAllocEngine = activeEngines.find(e => e.id === 'engine_2')?.active;
    const slackLiquidity = slackAllocEngine ? Math.max(16, baseSlack + 6) : baseSlack;

    // Delivery risk rating
    const deliveryConfidence = Math.min(99, Math.max(34, Math.round(rawScore * 0.5 + rawCp * 0.5)));
    const deliveryRiskLevel = deliveryConfidence >= 88 ? 'Low' : deliveryConfidence >= 70 ? 'Moderate' : 'Critical';

    // Autonomy readiness score
    const autonomyScore = Math.round((activeCount / 7) * 70 + (rawScore * 0.3));

    return {
      activeEngineCount: activeCount,
      stabilityScore: rawScore,
      criticalPathHealth: rawCp,
      burnoutIndex: rawBurnout,
      velocityVariance: rawVar,
      slackLiquidity,
      deliveryConfidence,
      deliveryRiskLevel,
      autonomyScore
    };
  }, [teamLoad, baseSlack, dependencyComplexity, burnoutSignals, velocityVariance, activeEngines]);

  // Copy helper
  const handleCopyText = (content: string, label: string) => {
    navigator.clipboard.writeText(content);
    setCopiedNotification(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedNotification(null), 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Full Unified Markdown for Part VIII
  const fullPart8Markdown = useMemo(() => {
    return `# ⭐ FLOWFORGE — TOTAL ENTERPRISE STACK (PART VIII)
Global Expansion Strategy, Category Domination Plan, Autonomy Simulation, and Stability OS 3.0 Vision.

---

## 1. FLOWFORGE GLOBAL EXPANSION STRATEGY
Document Ref: ${FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.documentId}
Mission: ${FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.mission}

### Phase 1 — North America (Year 1)
- **Targets**: SaaS & Cloud Platforms, Fintech, Insurance, High-Pressure Engineering Teams
- **Hub**: Sachse / Dallas, TX (Global HQ)
- **Target ARR**: $3,600,000 to $12,400,000 | 85 Enterprise Accounts | 15,000+ Protected Engineers
- **Strategic Actions**:
  * Rapid pilot penetration via frictionless 30-day Enterprise Stability Audit (ESA).
  * Rollout of Governance RulePack v1 to enforce statutory 15% slack capacity floor.
  * Autonomy Engine activation across early-adopter enterprise engineering squads.
  * Launch inaugural North American Stability Summit in Dallas, TX.

### Phase 2 — EMEA (Year 2)
- **Targets**: Tier-1 Banking, Advanced Manufacturing, Energy, Government Technology
- **Hub**: London, UK & Frankfurt, Germany
- **Target ARR**: $12,400,000 to $34,500,000 | 260 Enterprise Accounts | 58,000+ Protected Engineers
- **Strategic Actions**:
  * Launch FlowForge Partner Network (FPN) across European systems integrators.
  * Establish European Stability Consulting Network and certified regional architects.
  * Evangelize ESP category through European analyst briefings (Gartner London, IDC EMEA).
  * Convene the first European Stability Summit in Frankfurt.

### Phase 3 — APAC (Year 3)
- **Targets**: AI Foundational Labs, Robotics, Global Gaming Studios, Cloud Platforms
- **Hub**: Singapore & Tokyo, Japan
- **Target ARR**: $34,500,000 to $78,000,000 | 640 Enterprise Accounts | 185,000+ Protected Engineers
- **Strategic Actions**:
  * Autonomy Engine localization supporting multi-lingual PR review workflows & timezone handoffs.
  * Intelligence forecasting expansion tailored for 24/7 round-the-sun engineering delivery.
  * Formation of the APAC Stability Council with regional technology leaders.
  * Rollout of certified ESP examination centers in Tokyo, Singapore, and Sydney.

### Phase 4 — LATAM + Africa (Year 4)
- **Targets**: Telecommunications & Mobile Money, Critical Infrastructure, Public Sector, Emerging Tech
- **Hub**: São Paulo, Brazil & Nairobi, Kenya
- **Target ARR**: $78,000,000 to $115,000,000 | 1,320 Enterprise Accounts | 440,000+ Protected Engineers
- **Strategic Actions**:
  * Regional partner alliances with telecom system integrators.
  * Stability OS low-bandwidth telemetry edge deployment for distributed offshore hubs.
  * Governance standardization across public sector engineering initiatives.
  * FlowForge Emerging Tech Stability Scholarship for local developers.

### Phase 5 — Global Standardization (Year 5)
- **Outcome**: FlowForge becomes the global stability layer for engineering worldwide.
- **Target ARR**: $145,000,000+ | 2,450+ Enterprise Accounts | 950,000+ Protected Engineers
- **Strategic Actions**:
  * Stability OS becomes mandatory for tech corporate governance and cyber/delivery insurance.
  * Global Stability Index (GSI) adopted as the universal metric for software engineering health.
  * Autonomous cross-enterprise capacity clearing via FFX Protocol.
  * World Engineering Stability Consortium (WESC) establishment.

---

## 2. FLOWFORGE CATEGORY DOMINATION PLAN
Category: Engineering Stability Platforms (ESP)
Premise: APM measures applications. Observability monitors infrastructure. DevOps orchestrates pipelines. FlowForge ESP governs, stabilizes, and autonomously rebalances engineering human and operational capacity.

### Step 1 — Define the Category
- Publish 'The Engineering Stability Platform (ESP) Category Bible' globally.
- Standardize the 9 Core Primitives: Stability Score, Slack Liquidity, Volatility Index, Critical Path Forecast, Burnout Index, Autonomy Engine, Governance RulePack, Intelligence Layer, ESA Certification.
- Publish open mathematical proofs on the necessity of the 15% Slack Floor (Queuing Theory & Little's Law).

### Step 2 — Evangelize the Category
- Executive analyst briefings (Gartner, Forrester, IDC) defining the ESP category.
- Annual Global Stability Summit hosting 2,500+ CTOs and chief architects.
- Global marketing campaigns: 'Stability Starts Here' and 'Why 100% Resource Utilization Guarantees Operational Collapse'.
- FlowForge Partner Summit aligning commercial incentives with global SI firms.

### Step 3 — Certify the Category
- Launch global professional accreditations:
  * FCSA: FlowForge Certified Stability Architect
  * FCGS: FlowForge Certified Governance Specialist
  * FCAE: FlowForge Certified Autonomy Engineer
- Standardize the 4-Tier ESP Maturity Model: Level 1 (Volatile) → Level 2 (Governed) → Level 3 (Autonomous) → Level 4 (Predictive).
- The 30-Day Enterprise Stability Audit (ESA) institutionalized as the industry gold standard.

### Step 4 — Institutionalize the Category
- Embed Governance RulePack v1 into enterprise IT governance and corporate risk charters.
- Deploy the closed-loop Autonomy Engine removing administrative PR queue delays.
- Expand the certified partner network across Accenture, Deloitte, and regional boutiques.
- Standardize 7/14/30-day Bayesian forward intelligence into quarterly executive forecasts.

### Step 5 — Dominate the Category
- FlowForge becomes synonymous with ESP: 'The Salesforce of Engineering Stability'.
- Stability OS 3.0 autonomous intelligence operating across enterprise ecosystems.
- GSI (Global Stability Index) cited by Wall Street equity analysts.
- Category creation completed; competitors permanently compete on FlowForge's terms.

---

## 3. FLOWFORGE AUTONOMOUS ENGINEERING SIMULATION
Simulating closed-loop load rebalancing, queue deflection, and cognitive protection across 7 engines:

### Simulation Inputs:
- Team Load: 40% to 120%
- Slack Distribution: 5% to 35%
- Dependency Graph Complexity: Low / Medium / High / Extreme
- Burnout Signals: Low / Balanced / Aggressive
- Historical Velocity Variance: 10% to 50%

### The 7 Simulation Engines:
1. Load Spike Detection (Surge sensing & cognitive overload detector)
2. Slack Allocation Engine (Buffer liquidity preservation & cross-squad transfers)
3. Critical Path Rescue Engine (Topological dependency stabilizer & reviewer deflection)
4. Burnout Prevention Engine (Cognitive exhaustion sensor & quiet-hours gate)
5. Velocity Stabilization Engine (Cycle-time variance damper & sprint volatility clamp)
6. Delivery Predictability Engine (10,000-iteration Monte Carlo Bayesian risk solver)
7. Autonomy Engine (Closed-loop capacity & PR review rebalancer)

### Simulation Outputs:
- Stability Score: 0–100 Composite Metric
- Critical Path Health: % Dependency Reliability
- Burnout Curve: Fatigue Index & Exposure
- Velocity Forecast: Cycle Time Variance (%)
- Slack Liquidity Map: Active Buffer vs Statutory Floor
- Delivery Risk Report: Predictive Confidence Rating
- Autonomy Readiness Score: Organizational Automation Maturity

---

## 4. FLOWFORGE STABILITY OS 3.0 VISION
The Future of FlowForge: The Next Evolution of Engineering Stability.

### Generational Evolution:
- **Stability OS 1.0 (Measurement)**: Load, slack, volatility, critical path, burnout telemetry.
- **Stability OS 2.0 (Autonomy)**: Workload rebalancing, slack redistribution, burnout mitigation, critical path rescue.
- **Stability OS 3.0 (Autonomous Engineering Intelligence)**: The predictive, self-optimizing nervous system for global software engineering.

### 6 Core Pillars of Stability OS 3.0:
1. **Predictive Stability Intelligence**: 30–90 day forward Bayesian forecasting of team capacity, delivery risk, and release bottlenecks.
2. **Autonomous Delivery Optimization**: AI dynamically tunes queue sizes, reviewer pairing, and merge cadences to maximize throughput without speeding up humans.
3. **Human-Centered Burnout Prevention**: Proactive cognitive defense treating developers as elite cognitive performers with protected rest intervals.
4. **Critical Path Reinforcement**: Preemptively detecting and shoring up fragile architectural dependencies before release failures occur.
5. **Global Stability Network**: Cross-enterprise capacity clearinghouse via the FFX Protocol.
6. **ESP Standardization**: De facto standard recognized by boards, enterprise risk frameworks, and tech equity analysts.

### Stability OS 3.0 Outcomes:
- **Zero Burnout**: Complete elimination of burnout-induced turnover.
- **Predictable Delivery**: 98%+ on-time milestone delivery confidence.
- **Autonomous Engineering**: 95% reduction in administrative queue management toil.
- **Global Certification**: Tier-4 ESP maturity standard.
- **ESP Category Dominance**: Sovereign standard across the global tech economy.
`;
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 font-sans">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 text-sm border border-emerald-400/50 animate-bounce">
          <CheckCircle2Icon className="w-5 h-5 text-slate-950" />
          <span>{copiedNotification}</span>
        </div>
      )}

      {/* Top Banner Navigation Bar */}
      <div className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center space-x-2 text-slate-400">
            <span className="font-semibold text-emerald-400">FlowForge Enterprise Suite</span>
            <span>/</span>
            <span className="text-white font-medium">Part VIII: Expansion &amp; Category Domination</span>
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
            {onNavigateToStability && (
              <button
                onClick={onNavigateToStability}
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition whitespace-nowrap"
              >
                Stability Core
              </button>
            )}
            {onNavigateToPart6 && (
              <button
                onClick={onNavigateToPart6}
                className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition whitespace-nowrap"
              >
                Part VI: Analyst
              </button>
            )}
            {onNavigateToPart7 && (
              <button
                onClick={onNavigateToPart7}
                className="px-2.5 py-1 rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition whitespace-nowrap"
              >
                Part VII: Master Stack
              </button>
            )}
            {onNavigateToPart9 && (
              <button
                onClick={onNavigateToPart9}
                className="px-2.5 py-1 rounded-md bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 transition whitespace-nowrap font-bold"
              >
                ⭐ Part IX: Founder & Capital
              </button>
            )}
            {onNavigateToTotalBusinessArchitecture && (
              <button
                onClick={onNavigateToTotalBusinessArchitecture}
                className="px-2.5 py-1 rounded-md bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 transition whitespace-nowrap"
              >
                Architecture Suite
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Header Container */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  GLOBAL EXPANSION &bull; CATEGORY DOMINATION &bull; AUTONOMOUS SIMULATION
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Part VIII
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline-block">
                  Stability OS 3.0 Ready
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mt-1">
                ⭐ FlowForge Total Enterprise Stack (Part VIII)
              </h1>
              <p className="text-sm text-slate-400 max-w-3xl mt-1">
                Global expansion strategy, category domination plan, interactive autonomous engineering simulation, and the complete Stability OS 3.0 vision — delivered at once.
              </p>
            </div>

            {/* Quick Action Tools */}
            <div className="flex items-center flex-wrap gap-2 text-xs">
              <button
                onClick={() => handleCopyText(fullPart8Markdown, "Complete Part VIII Master Dossier (Markdown)")}
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition flex items-center space-x-1.5 shadow-md shadow-emerald-500/20"
              >
                <CopyIcon className="w-4 h-4" />
                <span>Copy Full Part VIII</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition flex items-center space-x-1.5"
              >
                <PrinterIcon className="w-4 h-4 text-slate-400" />
                <span>Print / PDF</span>
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center space-x-2 mt-8 overflow-x-auto pb-2 border-b border-slate-800/80">
            <button
              onClick={() => setActiveTab('global_expansion')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === 'global_expansion'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <GlobeIcon className="w-4 h-4" />
              <span>1. Global Expansion Strategy</span>
            </button>

            <button
              onClick={() => setActiveTab('category_domination')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === 'category_domination'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <TargetIcon className="w-4 h-4" />
              <span>2. Category Domination Plan</span>
            </button>

            <button
              onClick={() => setActiveTab('autonomy_simulation')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === 'autonomy_simulation'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <CpuIcon className="w-4 h-4" />
              <span>3. Autonomy Simulation Engine</span>
              <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Interactive
              </span>
            </button>

            <button
              onClick={() => setActiveTab('stability_os_3')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === 'stability_os_3'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <SparklesIcon className="w-4 h-4" />
              <span>4. Stability OS 3.0 Vision</span>
            </button>

            <button
              onClick={() => setActiveTab('consolidated_dossier')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === 'consolidated_dossier'
                  ? 'bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <FileTextIcon className="w-4 h-4" />
              <span>Part VIII Master Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* =========================================================================
            TAB 1: GLOBAL EXPANSION STRATEGY
        ========================================================================== */}
        {activeTab === 'global_expansion' && (
          <div className="space-y-8">
            {/* Mission Hero */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-mono font-semibold uppercase">
                  <GlobeIcon className="w-4 h-4" />
                  <span>Document Ref: {FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.documentId}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  {FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.title}
                </h2>
                <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                  {FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.mission}
                </p>

                {/* 5-Phase Roadmap Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-8">
                  {FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.phases.map((p, idx) => (
                    <button
                      key={p.phase}
                      onClick={() => setSelectedPhaseIndex(idx)}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        selectedPhaseIndex === idx
                          ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-emerald-400 block">
                        {p.phase} &bull; {p.targetTimeline}
                      </span>
                      <span className="text-xs font-bold text-white block mt-0.5 truncate">
                        {p.region}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-1 font-mono">
                        {p.expectedARR.split(' ')[0]} ARR
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Phase Deep Dive Card */}
            {(() => {
              const phase = FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.phases[selectedPhaseIndex];
              return (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {phase.phase}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          Timeline: {phase.targetTimeline}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                        {phase.region} Expansion Architecture
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Operational Hub: <strong className="text-white">{phase.regionalHub}</strong>
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-xs">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Target ARR</div>
                        <div className="font-bold text-emerald-400">{phase.expectedARR}</div>
                      </div>
                      <div className="w-px h-8 bg-slate-800" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Enterprise Accounts</div>
                        <div className="font-bold text-white">{phase.targetEnterprises.toLocaleString()}</div>
                      </div>
                      <div className="w-px h-8 bg-slate-800" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Engineers Protected</div>
                        <div className="font-bold text-amber-400">{phase.engineersProtected}</div>
                      </div>
                    </div>
                  </div>

                  {/* 3 Columns: Target Industries, Strategic Actions, Compliance & Milestones */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Col 1: Target Industries */}
                    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80">
                      <h4 className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center space-x-2">
                        <TargetIcon className="w-3.5 h-3.5" />
                        <span>Target Industry Verticals</span>
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {phase.targetIndustries.map((ind, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                            <span className="text-emerald-400 font-bold mt-0.5">&bull;</span>
                            <span>{ind}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-slate-900">
                        <h5 className="text-[11px] font-mono uppercase font-bold text-slate-400">
                          Sovereign Telemetry &amp; Compliance
                        </h5>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {phase.keyRegulatoryCompliance.map((reg, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-700"
                            >
                              {reg}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Col 2: Strategic Actions */}
                    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800/80 md:col-span-2">
                      <h4 className="text-xs font-mono uppercase font-bold text-indigo-400 flex items-center space-x-2">
                        <ZapIcon className="w-3.5 h-3.5" />
                        <span>Execution Roadmap &amp; Strategic Actions</span>
                      </h4>
                      <div className="mt-3 space-y-2.5">
                        {phase.strategicActions.map((action, i) => (
                          <div
                            key={i}
                            className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start space-x-2.5"
                          >
                            <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-xs text-slate-200 leading-relaxed">{action}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-900">
                        <h5 className="text-[11px] font-mono uppercase font-bold text-amber-400">
                          Critical Success Milestones
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                          {phase.keyMilestones.map((ms, i) => (
                            <div
                              key={i}
                              className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 border border-slate-800 flex items-start space-x-1.5"
                            >
                              <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ms}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Global Scaling Progression Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center space-x-2">
                <BarChart3Icon className="w-5 h-5 text-emerald-400" />
                <span>Global Cumulative Expansion Matrix (5-Year Forecast)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Strategic capacity ramp from regional beachhead to sovereign worldwide category standardization.
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase">
                      <th className="py-3 px-4">Phase &amp; Region</th>
                      <th className="py-3 px-4">Timeline</th>
                      <th className="py-3 px-4">Target ARR</th>
                      <th className="py-3 px-4">Enterprise Customers</th>
                      <th className="py-3 px-4">Engineers Protected</th>
                      <th className="py-3 px-4">Primary Expansion Hub</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {FLOWFORGE_GLOBAL_EXPANSION_STRATEGY.phases.map(p => (
                      <tr key={p.phase} className="hover:bg-slate-800/40 transition">
                        <td className="py-3 px-4 font-bold text-white flex items-center space-x-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>{p.phase} — {p.region}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{p.targetTimeline}</td>
                        <td className="py-3 px-4 text-emerald-400 font-bold">{p.expectedARR}</td>
                        <td className="py-3 px-4 font-bold text-white">{p.targetEnterprises.toLocaleString()}</td>
                        <td className="py-3 px-4 text-amber-400 font-bold">{p.engineersProtected}</td>
                        <td className="py-3 px-4 text-slate-300">{p.regionalHub}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: CATEGORY DOMINATION PLAN
        ========================================================================== */}
        {activeTab === 'category_domination' && (
          <div className="space-y-8">
            {/* Category Header */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase">
                  <TargetIcon className="w-4 h-4" />
                  <span>Category Creation &bull; {FLOWFORGE_CATEGORY_DOMINATION_PLAN.categoryName}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  {FLOWFORGE_CATEGORY_DOMINATION_PLAN.title}
                </h2>
                <div className="mt-3 p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  <strong className="text-indigo-400 uppercase font-mono">Category Axiom: </strong>
                  {FLOWFORGE_CATEGORY_DOMINATION_PLAN.categoryPremise}
                </div>

                {/* 5-Step Progress Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-8">
                  {FLOWFORGE_CATEGORY_DOMINATION_PLAN.steps.map((s, idx) => (
                    <button
                      key={s.stepNumber}
                      onClick={() => setSelectedStepIndex(idx)}
                      className={`p-3.5 rounded-xl border text-left transition ${
                        selectedStepIndex === idx
                          ? 'bg-indigo-500/15 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                          : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase font-bold text-indigo-400 block">
                        Step 0{s.stepNumber}
                      </span>
                      <span className="text-xs font-bold text-white block mt-0.5 truncate">
                        {s.title}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-1 truncate">
                        {s.theme}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Step Deep Dive */}
            {(() => {
              const step = FLOWFORGE_CATEGORY_DOMINATION_PLAN.steps[selectedStepIndex];
              return (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-800 pb-5">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                      STEP 0{step.stepNumber} &bull; {step.theme}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2">
                      <strong>Core Objective:</strong> {step.objective}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left: Channels & Key Deliverables */}
                    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
                      <h4 className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center space-x-2">
                        <LayersIcon className="w-3.5 h-3.5" />
                        <span>Execution Channels &amp; Key Deliverables</span>
                      </h4>
                      <div className="space-y-2.5 mt-3">
                        {step.channelsAndDeliverables.map((item, i) => (
                          <div
                            key={i}
                            className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-200 flex items-start space-x-2.5"
                          >
                            <CheckCircle2Icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Metrics of Success & Competitive Moat Impact */}
                    <div className="space-y-6">
                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                        <h4 className="text-xs font-mono uppercase font-bold text-amber-400 flex items-center space-x-2">
                          <BarChart3Icon className="w-3.5 h-3.5" />
                          <span>Measurable Metrics of Success</span>
                        </h4>
                        <div className="space-y-2 mt-3">
                          {step.metricsOfSuccess.map((metric, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800 flex items-center space-x-2"
                            >
                              <TrendingUpIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                        <h4 className="text-xs font-mono uppercase font-bold text-purple-400 flex items-center space-x-2">
                          <ShieldCheckIcon className="w-3.5 h-3.5" />
                          <span>Defensive Moat &amp; Competitive Impact</span>
                        </h4>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                          {step.competitiveImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Certification Ecosystem Showcase */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-amber-400">
                    STEP 3 ARTIFACT SPECIFICATION
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                    FlowForge Global ESP Professional Certification Ecosystem
                  </h3>
                </div>
                <div className="text-xs text-slate-400">
                  Global Standard for Engineering Stability Architects
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 relative">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    FCSA
                  </div>
                  <h4 className="text-sm font-bold text-white mt-3">
                    FlowForge Certified Stability Architect
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Senior engineering leads, VPs, and principal architects designing queue governance, buffer liquidity, and critical path protection.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Prereq: 5+ Yrs Exp</span>
                    <span className="text-emerald-400 font-bold">120-Min Exam</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 relative">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    FCGS
                  </div>
                  <h4 className="text-sm font-bold text-white mt-3">
                    FlowForge Certified Governance Specialist
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Compliance officers, PMO leaders, and Agile coaches auditing RulePack v1 constraints, slack floors, and delivery risk variance.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Prereq: ESA Training</span>
                    <span className="text-indigo-400 font-bold">90-Min Exam</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 relative">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-xs">
                    FCAE
                  </div>
                  <h4 className="text-sm font-bold text-white mt-3">
                    FlowForge Certified Autonomy Engineer
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    DevOps, SRE, and platform engineers configuring closed-loop PR review deflection, quiet-hours gating, and FFX liquidity clearing.
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Prereq: Platform Lead</span>
                    <span className="text-purple-400 font-bold">Hands-On Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: AUTONOMOUS ENGINEERING SIMULATION (INTERACTIVE)
        ========================================================================== */}
        {activeTab === 'autonomy_simulation' && (
          <div className="space-y-8">
            {/* Simulator Intro Banner */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-semibold uppercase">
                    <CpuIcon className="w-4 h-4" />
                    <span>Real-Time Autonomous Telemetry Simulator</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                    FlowForge Autonomous Engineering Simulation
                  </h2>
                  <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                    Test how FlowForge’s 7 Closed-Loop Simulation Engines detect overload, rebalance slack liquidity, protect fragile critical paths, and eliminate engineer burnout in real time.
                  </p>
                </div>

                {/* Preset Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 text-xs">
                  <span className="text-slate-400 text-[11px] font-mono font-semibold uppercase hidden lg:inline">
                    Simulation Presets:
                  </span>
                  <button
                    onClick={() => applyPreset('crisis')}
                    className="px-3 py-2 rounded-lg bg-rose-950/70 hover:bg-rose-900 text-rose-300 border border-rose-800 font-bold transition"
                  >
                    Release Crunch Crisis
                  </button>
                  <button
                    onClick={() => applyPreset('fragile')}
                    className="px-3 py-2 rounded-lg bg-amber-950/70 hover:bg-amber-900 text-amber-300 border border-amber-800 font-bold transition"
                  >
                    Fragile Monolith
                  </button>
                  <button
                    onClick={() => applyPreset('flowforge_ideal')}
                    className="px-3 py-2 rounded-lg bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 border border-emerald-700 font-bold transition flex items-center space-x-1"
                  >
                    <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>FlowForge Autonomy</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Interactive Workbench: 2-Column Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Simulation Inputs & 7 Engines (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Simulation Inputs Panel */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="text-xs font-mono uppercase font-bold text-white flex items-center space-x-2">
                      <SlidersIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>1. Simulation Input Telemetry</span>
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      Live Environmental Parameters
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Team Load Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">Team Cognitive &amp; PR Load:</span>
                        <span className={`font-bold ${teamLoad > 95 ? 'text-rose-400' : teamLoad > 85 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {teamLoad}% {teamLoad > 95 ? '(Extreme Strain)' : teamLoad > 85 ? '(Heavy Load)' : '(Balanced)'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="120"
                        value={teamLoad}
                        onChange={e => setTeamLoad(Number(e.target.value))}
                        className="w-full mt-1.5 accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                      />
                    </div>

                    {/* Base Slack Distribution Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">Slack Capacity Distribution:</span>
                        <span className={`font-bold ${baseSlack < 15 ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {baseSlack}% {baseSlack < 15 ? '(Below Statutory 15% Floor)' : '(Compliant)'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="35"
                        value={baseSlack}
                        onChange={e => setBaseSlack(Number(e.target.value))}
                        className="w-full mt-1.5 accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                      />
                    </div>

                    {/* Historical Velocity Variance Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">Velocity Variance (Sprint Cycle Volatility):</span>
                        <span className={`font-bold ${velocityVariance > 25 ? 'text-rose-400' : 'text-emerald-400'}`}>
                          &plusmn;{velocityVariance}% {velocityVariance > 25 ? '(High Volatility)' : '(Stable)'}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        value={velocityVariance}
                        onChange={e => setVelocityVariance(Number(e.target.value))}
                        className="w-full mt-1.5 accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                      />
                    </div>

                    {/* Discrete Selectors: Dependency Graph & Burnout Sensitivity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">
                          Dependency Graph Complexity:
                        </label>
                        <div className="grid grid-cols-4 gap-1">
                          {(['Low', 'Medium', 'High', 'Extreme'] as const).map(lvl => (
                            <button
                              key={lvl}
                              onClick={() => setDependencyComplexity(lvl)}
                              className={`py-1 text-[11px] font-mono font-bold rounded ${
                                dependencyComplexity === lvl
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono text-slate-400 block mb-1">
                          Burnout Signals Sensitivity:
                        </label>
                        <div className="grid grid-cols-3 gap-1">
                          {(['Low', 'Balanced', 'Aggressive'] as const).map(sens => (
                            <button
                              key={sens}
                              onClick={() => setBurnoutSignals(sens)}
                              className={`py-1 text-[11px] font-mono font-bold rounded ${
                                burnoutSignals === sens
                                  ? 'bg-amber-500 text-slate-950'
                                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                              }`}
                            >
                              {sens}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. The 7 Simulation Engines Toggles */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="text-xs font-mono uppercase font-bold text-white flex items-center space-x-2">
                        <CpuIcon className="w-3.5 h-3.5 text-emerald-400" />
                        <span>2. Active Autonomous Simulation Engines ({simulationResults.activeEngineCount}/7)</span>
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        Toggle specific autonomous algorithms to observe real-time system impact.
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[10px] font-mono">
                      <button
                        onClick={() => handleToggleAllEngines(true)}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold"
                      >
                        Enable All
                      </button>
                      <button
                        onClick={() => handleToggleAllEngines(false)}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 font-bold"
                      >
                        Disable All
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {activeEngines.map(engine => (
                      <div
                        key={engine.id}
                        onClick={() => handleToggleEngine(engine.id)}
                        className={`p-3 rounded-xl border transition cursor-pointer flex items-start justify-between gap-3 ${
                          engine.active
                            ? 'bg-slate-950 border-emerald-500/40 text-white'
                            : 'bg-slate-950/40 border-slate-800/80 text-slate-500 opacity-60 hover:opacity-80'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 ${
                              engine.active
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-500'
                            }`}
                          >
                            E{engine.engineNumber}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-white">
                                {engine.name}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                                &bull; {engine.shortDesc}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                              {engine.detailedAction}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 pt-0.5">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                              engine.active
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {engine.active ? 'ACTIVE' : 'OFFLINE'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Simulation Outputs & Reports (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-5 sticky top-16">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-emerald-400">
                        OUTPUT TELEMETRY &bull; LIVE EVALUATION
                      </span>
                      <h3 className="text-base font-black text-white">
                        System Stability &amp; Risk Dashboard
                      </h3>
                    </div>
                    <ActivityIcon className="w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>

                  {/* Primary Big Metric: Stability Score */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center relative overflow-hidden">
                    <div className="text-xs font-mono uppercase text-slate-400">Calculated Stability Score</div>
                    <div
                      className={`text-5xl font-black font-mono tracking-tight mt-1 ${
                        simulationResults.stabilityScore >= 80
                          ? 'text-emerald-400'
                          : simulationResults.stabilityScore >= 60
                          ? 'text-amber-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {simulationResults.stabilityScore}
                      <span className="text-xl text-slate-500 font-normal">/100</span>
                    </div>

                    <div className="mt-2 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-slate-900 border border-slate-700">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          simulationResults.stabilityScore >= 80
                            ? 'bg-emerald-400'
                            : simulationResults.stabilityScore >= 60
                            ? 'bg-amber-400'
                            : 'bg-rose-400'
                        }`}
                      />
                      <span className="text-white">
                        {simulationResults.stabilityScore >= 85
                          ? 'Autonomous Equilibrium'
                          : simulationResults.stabilityScore >= 70
                          ? 'Governed Stability'
                          : simulationResults.stabilityScore >= 50
                          ? 'Elevated Volatility'
                          : 'Critical Instability Warning'}
                      </span>
                    </div>
                  </div>

                  {/* 6 Sub-Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    {/* Critical Path Health */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Critical Path Health</div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        {simulationResults.criticalPathHealth}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {simulationResults.criticalPathHealth >= 80 ? 'Robust DAG' : 'Fragile Bottleneck'}
                      </div>
                    </div>

                    {/* Burnout Curve Level */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Burnout Index</div>
                      <div
                        className={`text-lg font-bold mt-0.5 ${
                          simulationResults.burnoutIndex > 70 ? 'text-rose-400' : 'text-emerald-400'
                        }`}
                      >
                        {simulationResults.burnoutIndex}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {simulationResults.burnoutIndex > 70 ? 'High Risk Breach' : 'Healthy Load Range'}
                      </div>
                    </div>

                    {/* Slack Liquidity Map */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Slack Liquidity</div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        {simulationResults.slackLiquidity}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {simulationResults.slackLiquidity >= 15 ? 'Floor Protected' : 'Deficit Detected'}
                      </div>
                    </div>

                    {/* Velocity Forecast Variance */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Velocity Variance</div>
                      <div className="text-lg font-bold text-white mt-0.5">
                        &plusmn;{simulationResults.velocityVariance}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {simulationResults.velocityVariance <= 18 ? 'Target Clamp Met' : 'Volatile Swings'}
                      </div>
                    </div>

                    {/* Delivery Risk Report */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Delivery Confidence</div>
                      <div
                        className={`text-lg font-bold mt-0.5 ${
                          simulationResults.deliveryConfidence >= 85 ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      >
                        {simulationResults.deliveryConfidence}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        Risk: <strong>{simulationResults.deliveryRiskLevel}</strong>
                      </div>
                    </div>

                    {/* Autonomy Readiness Score */}
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-500 uppercase">Autonomy Readiness</div>
                      <div className="text-lg font-bold text-purple-400 mt-0.5">
                        {simulationResults.autonomyScore}%
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {simulationResults.autonomyScore >= 80 ? 'Closed-Loop Master' : 'Assisted Mode'}
                      </div>
                    </div>
                  </div>

                  {/* Simulation Use Cases */}
                  <div className="pt-3 border-t border-slate-800 text-xs">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1.5">
                      Verified Simulation Use Cases:
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
                      {[
                        'Enterprise Demos',
                        'Analyst Briefings',
                        'Partner Training',
                        'Keynote Events',
                        'Stability OS Launch',
                        'Category Evangelism'
                      ].map((uc, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: STABILITY OS 3.0 VISION
        ========================================================================== */}
        {activeTab === 'stability_os_3' && (
          <div className="space-y-8">
            {/* Vision Header */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center space-x-2 text-purple-400 text-xs font-mono font-semibold uppercase">
                  <SparklesIcon className="w-4 h-4" />
                  <span>The Future of FlowForge &bull; Stability OS 3.0</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                  ⭐ FlowForge Stability OS 3.0 Vision
                </h2>
                <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                  The next evolution of engineering stability: Autonomous Engineering Intelligence — moving beyond measurement and reactive rebalancing into predictive, sovereign, self-optimizing capacity ecosystems.
                </p>
              </div>
            </div>

            {/* 3-Era Evolutionary Matrix */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center space-x-2">
                <LayersIcon className="w-5 h-5 text-purple-400" />
                <span>The Three Eras of Engineering Stability Evolution</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {FLOWFORGE_STABILITY_EVOLUTION.map((tier, idx) => (
                  <div
                    key={tier.version}
                    className={`p-6 rounded-2xl border flex flex-col justify-between ${
                      idx === 2
                        ? 'bg-gradient-to-b from-purple-950/40 via-slate-950 to-slate-950 border-purple-500/50 shadow-xl shadow-purple-500/10'
                        : 'bg-slate-950 border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-mono font-bold uppercase ${
                            idx === 2 ? 'text-purple-400' : 'text-slate-400'
                          }`}
                        >
                          {tier.version}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{tier.era}</span>
                      </div>

                      <h4 className="text-lg font-black text-white mt-1">{tier.name}</h4>
                      <p className="text-xs text-amber-300/90 font-mono mt-1 italic">
                        "{tier.tagline}"
                      </p>

                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {tier.focus}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-800 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">
                          Core Capabilities:
                        </span>
                        {tier.coreCapabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="text-xs text-slate-300 flex items-start space-x-1.5"
                          >
                            <span className="text-purple-400 font-bold mt-0.5">&bull;</span>
                            <span className="leading-snug">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-sans space-y-2">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                          Human Experience:
                        </span>
                        <span className="text-slate-300 text-[11px] leading-snug block">
                          {tier.humanExperience}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">
                          Delivery Predictability:
                        </span>
                        <span className="text-slate-300 text-[11px] leading-snug block">
                          {tier.deliveryPredictability}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The 6 Core Pillars of Stability OS 3.0 */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-purple-400">
                    ARCHITECTURAL FOUNDATION
                  </span>
                  <h3 className="text-xl font-black text-white mt-0.5">
                    The 6 Core Pillars of Stability OS 3.0
                  </h3>
                </div>

                <div className="flex items-center space-x-1 overflow-x-auto py-1">
                  {FLOWFORGE_STABILITY_3_PILLARS.map((p, idx) => (
                    <button
                      key={p.number}
                      onClick={() => setSelectedPillarIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition whitespace-nowrap ${
                        selectedPillarIndex === idx
                          ? 'bg-purple-500 text-slate-950 shadow-md shadow-purple-500/20'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                      }`}
                    >
                      Pillar 0{p.number}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Pillar Deep Dive */}
              {(() => {
                const pillar = FLOWFORGE_STABILITY_3_PILLARS[selectedPillarIndex];
                return (
                  <div className="bg-slate-950 p-6 sm:p-8 rounded-xl border border-slate-800 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                          PILLAR 0{pillar.number} &bull; {pillar.tagline}
                        </span>
                        <h4 className="text-2xl font-black text-white mt-1">
                          {pillar.title}
                        </h4>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 self-start">
                        Stability OS 3.0 Standard
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {pillar.lead}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Architecture */}
                      <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 md:col-span-2">
                        <h5 className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center space-x-2">
                          <CpuIcon className="w-3.5 h-3.5" />
                          <span>Underlying Technical Architecture</span>
                        </h5>
                        <div className="space-y-2.5 mt-3">
                          {pillar.technicalArchitecture.map((arch, i) => (
                            <div
                              key={i}
                              className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-200 flex items-start space-x-2"
                            >
                              <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{arch}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes & Safeguards */}
                      <div className="space-y-4">
                        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                          <span className="text-[11px] font-mono uppercase font-bold text-amber-400 block">
                            Enterprise Outcome:
                          </span>
                          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                            {pillar.enterpriseOutcome}
                          </p>
                        </div>

                        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                          <span className="text-[11px] font-mono uppercase font-bold text-rose-400 block">
                            Statutory Governance Safeguard:
                          </span>
                          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                            {pillar.governanceSafeguard}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Interactive 30-to-90-Day Predictive Trajectory Model */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-emerald-400">
                    PILLAR 1 LIVE FORECASTER
                  </span>
                  <h3 className="text-lg font-black text-white mt-0.5">
                    Predictive Stability Trajectory (30–90 Day Forward Bayesian Simulation)
                  </h3>
                  <p className="text-xs text-slate-400">
                    Compare unassisted legacy delivery vs FlowForge Stability OS 3.0 Autonomous Intelligence.
                  </p>
                </div>

                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="text-slate-400">Forecast Horizon:</span>
                  {[30, 60, 90].map(h => (
                    <button
                      key={h}
                      onClick={() => setForwardForecastHorizon(h)}
                      className={`px-3 py-1 rounded-md font-bold transition ${
                        forwardForecastHorizon === h
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {h} Days
                    </button>
                  ))}
                </div>
              </div>

              {/* Trajectory comparison grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-mono text-xs">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Milestone Delivery Confidence</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-emerald-400">98.4%</span>
                    <span className="text-xs text-slate-500 line-through">64.2%</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">
                    Bayesian critical path rescue routes review capacity to blocked items 14 days before release milestone slips.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Engineer Burnout Incidents</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-emerald-400">0 Chronic</span>
                    <span className="text-xs text-slate-500 line-through">18 Attritions</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">
                    Statutory cognitive defense activates quiet hours and sheds non-essential cognitive load automatically.
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase block">Sprint Volatility Clamp</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-black text-emerald-400">&plusmn;8%</span>
                    <span className="text-xs text-slate-500 line-through">&plusmn;42%</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug font-sans">
                    Cycle time variance strictly clamped; boom-and-bust sprint cycles permanently eliminated.
                  </p>
                </div>
              </div>
            </div>

            {/* The 5 Stability OS 3.0 Outcomes */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-black text-white tracking-tight flex items-center space-x-2">
                <AwardIcon className="w-5 h-5 text-amber-400" />
                <span>The 5 Definitive Outcomes of Stability OS 3.0</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                {FLOWFORGE_STABILITY_3_OUTCOMES.map((oc, i) => (
                  <div
                    key={i}
                    className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-bold text-xs">
                        0{i + 1}
                      </div>
                      <h4 className="text-sm font-bold text-white mt-2.5">{oc.title}</h4>
                      <span className="text-xs font-mono font-bold text-emerald-400 block mt-0.5">
                        {oc.metric}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      {oc.lead}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: CONSOLIDATED MASTER DOSSIER (MARKDOWN)
        ========================================================================== */}
        {activeTab === 'consolidated_dossier' && (
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                    ⭐ PART VIII CONSOLIDATED MASTER DOSSIER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white pt-1">
                    Unified Strategic Repository &bull; Part VIII
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Read, inspect, or copy the complete unified text of all four Part VIII deliverables.
                  </p>
                </div>
                <button
                  onClick={() => handleCopyText(fullPart8Markdown, "Complete Part VIII Markdown Dossier")}
                  className="px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-purple-500/20 self-start"
                >
                  <CopyIcon className="w-4 h-4" />
                  <span>Copy Complete Dossier</span>
                </button>
              </div>

              {/* Raw Markdown Viewer Container */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-5 overflow-x-auto max-h-[640px] overflow-y-auto font-mono text-xs text-slate-300 leading-relaxed space-y-4 selection:bg-purple-500 selection:text-slate-950">
                <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300">
                  {fullPart8Markdown}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
