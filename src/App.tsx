import React, { useState, useEffect } from 'react';
import { GlobeIcon, BotIcon } from 'lucide-react';
import { 
  Task, 
  ResourcePerson, 
  Company, 
  TradeExchange, 
  Prospect, 
  McpServer, 
  AuditLogEntry, 
  ComplianceDeadline, 
  WhatIfScenario 
} from './types';
import { 
  INITIAL_TASKS, 
  INITIAL_RESOURCES, 
  INITIAL_COMPANIES, 
  INITIAL_TRADES, 
  INITIAL_PROSPECTS, 
  INITIAL_MCP_SERVERS, 
  INITIAL_AUDIT_LOGS, 
  COMPLIANCE_DEADLINES, 
  INITIAL_WHAT_IF_SCENARIOS 
} from './data/mockData';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { OrchestrationView } from './components/OrchestrationView';
import { ExchangeView } from './components/ExchangeView';
import { BillingView } from './components/BillingView';
import { OutreachView } from './components/OutreachView';
import { McpGatewayView } from './components/McpGatewayView';
import { ComplianceView } from './components/ComplianceView';
import { CopilotModal } from './components/CopilotModal';
import { WhatIfModal } from './components/WhatIfModal';
import { CreditPurchaseModal } from './components/CreditPurchaseModal';
import { CompanyManagementModal } from './components/CompanyManagementModal';
import { MarketingSite, MarketingPageType } from './components/MarketingSite';
import { AuthView } from './components/AuthView';
import { ExecutiveIntelligenceView } from './components/ExecutiveIntelligenceView';
import { StabilityDashboardView } from './components/StabilityDashboardView';
import { EnterpriseReadinessView } from './components/EnterpriseReadinessView';
import { EnterpriseExpansionSuiteView } from './components/EnterpriseExpansionSuiteView';
import { EnterpriseExpansionSuitePart2View } from './components/EnterpriseExpansionSuitePart2View';
import { EnterpriseExpansionSuitePart3View } from './components/EnterpriseExpansionSuitePart3View';
import { EnterpriseExpansionSuitePart4View } from './components/EnterpriseExpansionSuitePart4View';
import { EnterpriseExpansionSuitePart5View } from './components/EnterpriseExpansionSuitePart5View';
import { EnterpriseExpansionSuitePart6View } from './components/EnterpriseExpansionSuitePart6View';
import { EnterpriseExpansionSuitePart7View } from './components/EnterpriseExpansionSuitePart7View';
import { EnterpriseExpansionSuitePart8View } from './components/EnterpriseExpansionSuitePart8View';
import { EnterpriseExpansionSuitePart9View } from './components/EnterpriseExpansionSuitePart9View';
import { EnterpriseExpansionSuitePart10View } from './components/EnterpriseExpansionSuitePart10View';
import { TotalEnterprisePart14View } from './components/TotalEnterprisePart14View';
import { TotalBusinessArchitectureView } from './components/TotalBusinessArchitectureView';
import { MasterBusinessPlanView } from './components/MasterBusinessPlanView';
import { MvpRevenueExecutionView } from './components/MvpRevenueExecutionView';
import { AiDealCloserView } from './components/AiDealCloserView';

export default function App() {
  // Navigation & View Mode: 'app' | 'marketing' | 'auth'
  const [viewMode, setViewMode] = useState<'app' | 'marketing' | 'auth'>('app');
  const [marketingPage, setMarketingPage] = useState<MarketingPageType>('home');
  const [activeUserRole, setActiveUserRole] = useState<string>('SUPERADMIN');
  const [userEmail, setUserEmail] = useState<string>('admin@flowforge.fit');

  // State Engine
  const [activeTab, setActiveTab] = useState<string>('ai_deal_closer');

  // URL Hash synchronization engine: ensures flowforge.fit website and Platform OS are on the same page
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      if (!hash) return;

      const websitePages: MarketingPageType[] = [
        'home', 'product', 'platform', 'category', 'founders', 'pricing', 'esa_cert', 'contact'
      ];

      if (hash === 'ai_closer' || hash === 'ai_deal_closer') {
        setActiveTab('ai_deal_closer');
        setMarketingPage('ai_closer');
      } else if (hash === 'mvp_revenue') {
        setActiveTab('mvp_revenue');
        setMarketingPage('mvp_revenue');
      } else if (hash === 'stability_core') {
        setActiveTab('stability_core');
        setMarketingPage('stability_core');
      } else if (websitePages.includes(hash as any)) {
        setViewMode('marketing');
        setMarketingPage(hash as any);
      } else if (hash.startsWith('app') || hash.startsWith('tab-')) {
        const tab = hash.replace(/^(app|tab-)/, '');
        setViewMode('app');
        if (tab) setActiveTab(tab);
      } else {
        setViewMode('app');
        setActiveTab(hash);
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleSwitchToMarketing = (page?: string) => {
    setViewMode('marketing');
    if (page) {
      setMarketingPage(page as MarketingPageType);
      window.location.hash = page;
    } else {
      window.location.hash = marketingPage;
    }
  };

  const handleSwitchToApp = (tab?: string) => {
    setViewMode('app');
    if (tab) {
      setActiveTab(tab);
      window.location.hash = tab;
    } else {
      window.location.hash = activeTab;
    }
  };
  const [currentCompany, setCurrentCompany] = useState<Company>(INITIAL_COMPANIES[0]);
  const [companies, setCompanies] = useState<Company[]>(INITIAL_COMPANIES);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [resources, setResources] = useState<ResourcePerson[]>(INITIAL_RESOURCES);
  const [trades, setTrades] = useState<TradeExchange[]>(INITIAL_TRADES);
  const [prospects, setProspects] = useState<Prospect[]>(INITIAL_PROSPECTS);
  const [mcpServers, setMcpServers] = useState<McpServer[]>(INITIAL_MCP_SERVERS);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>(INITIAL_AUDIT_LOGS);
  const [deadlines, setDeadlines] = useState<ComplianceDeadline[]>(COMPLIANCE_DEADLINES);
  const [scenarios, setScenarios] = useState<WhatIfScenario[]>(INITIAL_WHAT_IF_SCENARIOS);
  const [burnoutShieldActive, setBurnoutShieldActive] = useState<boolean>(false);
  const [criticalPathRescued, setCriticalPathRescued] = useState<boolean>(false);

  // Modals
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isWhatIfOpen, setIsWhatIfOpen] = useState(false);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);

  // Pending Outreach Approvals Count
  const pendingApprovalsCount = prospects.filter(p => p.status === 'awaiting_approval').length;

  // Handlers for Real Enterprise Data Management & Purging Demo Data
  const handleAddCompany = (newCompanyData: Omit<Company, 'id'>) => {
    const newComp: Company = {
      ...newCompanyData,
      id: `C-${Date.now().toString().slice(-4)}`
    };

    setCompanies(prev => [...prev, newComp]);

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'REAL_PARTNER_COMPANY_REGISTERED',
      entityType: 'Company',
      entityId: newComp.id,
      actor: 'DATA_GOVERNANCE_MCP',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const handleDeleteCompany = (companyId: string) => {
    const targetComp = companies.find(c => c.id === companyId);
    if (!targetComp || targetComp.isAnchorCompany || targetComp.id === 'C1') {
      return; // Do not delete anchor company
    }

    setCompanies(prev => prev.filter(c => c.id !== companyId));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'FLOWFORGE_COMPANY_DELETED',
      entityType: 'Company',
      entityId: companyId,
      actor: 'DATA_GOVERNANCE_MCP',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const handleDeleteTrade = (tradeId: string) => {
    setTrades(prev => prev.filter(t => t.id !== tradeId));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'FLOWFORGE_TRADE_PURGED',
      entityType: 'TradeExchange',
      entityId: tradeId,
      actor: 'DATA_GOVERNANCE_MCP',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const handlePurgeAllDemoData = () => {
    // Retain only anchor company (CFO TAX PRO LLC) + any custom non-demo companies
    setCompanies(prev => prev.filter(c => c.isAnchorCompany || (!c.isDemoCompany && c.id === 'C1')));
    // Purge all demo trades
    setTrades(prev => prev.filter(t => !t.isDemoTrade));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'DEMO_DATA_PURGED_PRODUCTION_MODE_ACTIVE',
      entityType: 'SystemState',
      entityId: 'ROOT_NETWORK',
      actor: 'DATA_GOVERNANCE_MCP',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  const handleRestoreSampleData = () => {
    setCompanies(INITIAL_COMPANIES);
    setTrades(INITIAL_TRADES);

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'SAMPLE_TESTING_DATA_RESTORED',
      entityType: 'SystemState',
      entityId: 'ROOT_NETWORK',
      actor: 'SUPERADMIN',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: FFX Credit Purchase via Stripe
  const handleCreditPurchase = (creditsAdded: number, costUSD: number) => {
    setCurrentCompany(prev => ({
      ...prev,
      credits: prev.credits + creditsAdded
    }));

    setCompanies(prev => prev.map(c => {
      if (c.id === currentCompany.id) {
        return { ...c, credits: c.credits + creditsAdded };
      }
      return c;
    }));

    // Log to Audit Trail with Stripe Payment Intent ID simulation
    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'STRIPE_FFX_CREDITS_PURCHASED',
      entityType: 'Company',
      entityId: currentCompany.id,
      actor: 'STRIPE_CONNECT_GATEWAY',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Subscription Plan Update
  const handleUpdateSubscription = (tier: 'starter' | 'pro' | 'enterprise') => {
    const creditsMap = {
      starter: 100,
      pro: 10000,
      enterprise: 50000
    };

    const addedCredits = creditsMap[tier];
    setCurrentCompany(prev => ({
      ...prev,
      credits: prev.credits + addedCredits
    }));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: `SUBSCRIPTION_UPGRADED_${tier.toUpperCase()}`,
      entityType: 'Subscription',
      entityId: currentCompany.id,
      actor: 'STRIPE_BILLING_PORTAL',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Task Progress Update
  const handleTaskProgressUpdate = (taskId: string, newProgress: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const completed = newProgress >= 1.0;
        return {
          ...t,
          progress: newProgress,
          completed,
          status: completed ? 'completed' : 'in_progress'
        };
      }
      return t;
    }));

    // Log to Audit Trail
    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'TASK_PROGRESS_UPDATED',
      entityType: 'Task',
      entityId: taskId,
      actor: 'USER_EXECUTIVE',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Burnout Shield Activation
  const handleApplyBurnoutShield = () => {
    setBurnoutShieldActive(true);
    setResources(prev => prev.map(r => {
      if (r.cognitiveLoad > 0.80) {
        return {
          ...r,
          cognitiveLoad: Math.max(0.60, Number((r.cognitiveLoad - 0.22).toFixed(2))),
          burnoutRisk: 'low'
        };
      }
      return r;
    }));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'BURNOUT_SHIELD_AUTONOMOUS_LOAD_BALANCING_ENGAGED',
      entityType: 'ResourcePool',
      entityId: 'TEAM_DEV_DALLAS',
      actor: 'BURNOUT_SHIELD_MCP',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Critical Path Rescue
  const handleExecuteCriticalPathRescue = () => {
    setCriticalPathRescued(true);
    setTasks(prev => prev.map(t => {
      if (t.isCriticalPath) {
        const nextProgress = Math.min(1.0, Number((t.progress + 0.35).toFixed(2)));
        return {
          ...t,
          progress: nextProgress,
          status: nextProgress >= 1.0 ? 'completed' : 'in_progress',
          completed: nextProgress >= 1.0
        };
      }
      return t;
    }));

    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'CRITICAL_PATH_AUTONOMOUS_RESCUE_EXECUTED',
      entityType: 'PERT_DAG',
      entityId: 'PROJ_MAIN_DAG',
      actor: 'GNN_ORCHESTRATION_AGENT',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Execute Trade
  const handleExecuteTrade = (tradeToExecute: TradeExchange) => {
    setTrades(prev => prev.map(t => t.id === tradeToExecute.id ? tradeToExecute : t));
    
    // Deduct / Add credits
    setCompanies(prev => prev.map(c => {
      if (c.name === tradeToExecute.borrowerCompany) {
        return { ...c, credits: c.credits - tradeToExecute.creditsExchanged };
      }
      if (c.name === tradeToExecute.lenderCompany) {
        return { ...c, credits: c.credits + tradeToExecute.creditsExchanged };
      }
      return c;
    }));

    // Audit log
    const newLog: AuditLogEntry = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 19),
      action: 'CAPACITY_TRADE_EXECUTED',
      entityType: 'TradeExchange',
      entityId: tradeToExecute.id,
      actor: 'FFX_TRADE_BROKER',
      previousHash: auditLogs[0]?.hash || '00000000000000000000000000000000',
      hash: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      status: 'verified'
    };
    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Handler: Propose New Trade
  const handleProposeNewTrade = (newTradeData: Omit<TradeExchange, 'id' | 'timestamp'>) => {
    const newTrade: TradeExchange = {
      ...newTradeData,
      id: `TR-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16)
    };
    setTrades(prev => [newTrade, ...prev]);
  };

  // Handler: Approve Prospect Sequence
  const handleApproveProspectSequence = (prospectId: string) => {
    setProspects(prev => prev.map(p => {
      if (p.id === prospectId) {
        return {
          ...p,
          status: 'outreach_active',
          outreachSequence: p.outreachSequence.map(m => ({ ...m, status: 'approved' }))
        };
      }
      return p;
    }));
  };

  // Handler: Reject Prospect Sequence
  const handleRejectProspectSequence = (prospectId: string) => {
    setProspects(prev => prev.map(p => {
      if (p.id === prospectId) {
        return { ...p, status: 'researched' };
      }
      return p;
    }));
  };

  // Handler: Run Signal Radar
  const handleRunSignalRadar = (industry: string) => {
    const newProspect: Prospect = {
      id: `P-${Math.floor(100 + Math.random() * 900)}`,
      companyName: 'Apex Data Intelligence',
      domain: 'apexdata.io',
      industry: industry,
      sizeRange: '100-250 employees',
      location: 'Dallas, TX',
      fitScore: 92,
      status: 'awaiting_approval',
      signals: [
        {
          type: 'funding',
          source: 'Crunchbase',
          headline: 'Apex Data Raises $18M Series A for Real-Time Analytics',
          summary: 'Funding used to accelerate engineering hiring in Texas.',
          severity: 9,
          timestamp: new Date().toISOString().split('T')[0]
        }
      ],
      techStack: ['AWS', 'Kafka', 'React', 'Go', 'Docker'],
      painPoints: ['Sprint context-switching causing QA bottlenecks'],
      keyPeople: [{ name: 'Alex Rivera', title: 'VP of Product Development' }],
      outreachSequence: [
        {
          id: `MSG-${Date.now()}`,
          sequenceNumber: 1,
          channel: 'email',
          subject: 'Congrats on Apex Data\'s $18M Series A + QA sprint velocity',
          content: `Hi Alex, congrats on Apex Data's $18M Series A news! Scaling engineering in Texas creates massive QA sprint friction. FlowForge's AI orchestration unblocks deployment queues by sharing capacity across enterprises. Would you be open to a 15-minute chat?`,
          personalizationHook: 'Series A funding + QA sprint velocity',
          status: 'pending_review'
        }
      ]
    };

    setProspects(prev => [newProspect, ...prev]);
  };

  // Handler: Execute Tool Payload (MCP)
  const handleExecuteTool = async (toolName: string, payload: any) => {
    if (toolName === 'calculate_texas_saas_tax') {
      const fee = payload.fee || 5000;
      const rate = (payload.localTaxRate || 0.02) + 0.0625;
      const taxable = fee * 0.80;
      const tax = taxable * rate;
      return {
        tool: toolName,
        status: 'success',
        grossSaaSAmount: fee,
        taxableBasis80Percent: taxable,
        combinedTexasRate: `${(rate * 100).toFixed(2)}%`,
        totalSalesTaxDue: tax,
        legalReference: 'Texas Tax Code § 151.351 (80% Data Processing Exemption)'
      };
    }

    if (toolName === 'query_project_dag') {
      return {
        tool: toolName,
        status: 'success',
        nodesCount: tasks.length,
        criticalPathLength: tasks.filter(t => t.isCriticalPath).length,
        bottlenecksDetected: ['T5 (Auth Service)', 'T9 (Integration Testing)'],
        topologyValid: true
      };
    }

    if (toolName === 'detect_buying_signals') {
      return {
        tool: toolName,
        status: 'success',
        company: payload.companyName || 'Target Company',
        signalsDetected: 2,
        highPriorityTriggers: [
          { type: 'funding', headline: 'Series B $25M raised' },
          { type: 'hiring_spree', headline: '14 new engineering roles opened' }
        ]
      };
    }

    if (toolName === 'flowforge_delete_company') {
      const targetId = payload.companyId;
      handleDeleteCompany(targetId);
      return {
        tool: toolName,
        status: 'success',
        purgedCompanyId: targetId,
        message: `Successfully purged company node ${targetId} from FFX exchange ledger.`,
        sha256AuditRecord: Math.random().toString(36).substring(2, 15)
      };
    }

    if (toolName === 'flowforge_delete_trade') {
      const tradeId = payload.tradeId;
      handleDeleteTrade(tradeId);
      return {
        tool: toolName,
        status: 'success',
        purgedTradeId: tradeId,
        message: `Successfully removed test trade ${tradeId} from live ledger.`,
        reason: payload.reason || 'Purged demo trade for production rollout'
      };
    }

    if (toolName === 'flowforge_register_company') {
      const newCompData: Omit<Company, 'id'> = {
        name: payload.name || 'New Enterprise Partner',
        industry: payload.industry || 'Enterprise SaaS',
        location: payload.location || 'Dallas, TX',
        credits: payload.initialCredits || 2500,
        reputation: 0.98,
        activeTrades: 0,
        idleCapacityPercent: 20,
        trustScore: 98,
        isAnchorCompany: false,
        isDemoCompany: false,
        sosFileNumber: payload.sosFileNumber || '08051239',
        servicesOffered: ['Full-Stack AI Orchestration', 'DevOps & Cloud Automation']
      };
      handleAddCompany(newCompData);
      return {
        tool: toolName,
        status: 'success',
        registeredEntity: newCompData.name,
        location: newCompData.location,
        sosFileNumber: newCompData.sosFileNumber,
        initialCreditsAllocated: newCompData.credits,
        statusConfirmation: 'Texas Secretary of State Entity Active'
      };
    }

    if (toolName === 'agentmarketplace_discover_services') {
      return {
        tool: toolName,
        status: 'success',
        servicesDiscovered: [
          { provider: 'CFO TAX PRO LLC (dba FlowForge)', role: 'Enterprise AI Agent & FinTech Compliance', ratePerHourCredits: 45, reputation: 0.99 },
          { provider: 'Apex Systems Solutions', role: 'Senior QA Automation Specialist', ratePerHourCredits: 35, reputation: 0.92 }
        ],
        agentPactMeshStatus: 'Connected (Dallas Node 01)',
        x402Supported: true
      };
    }

    if (toolName === 'agentmarketplace_execute_x402_trade') {
      const credits = payload.credits || 35;
      const fee5Percent = Math.round(credits * 0.05);
      return {
        tool: toolName,
        status: 'success',
        tradeSettlementId: `X402-${Date.now().toString().slice(-6)}`,
        lender: payload.lender || 'Apex Systems Solutions',
        borrower: payload.borrower || 'CFO TAX PRO LLC (dba FlowForge)',
        escrowLockedCredits: credits,
        flowforgePlatformTakeRate5Pct: `${fee5Percent} FFX retained to FlowForge reserve`,
        settlementProtocol: 'x402-HTTP-Microtrade-RFC9110',
        escrowDurationHours: payload.escrowDurationHours || 72
      };
    }

    return {
      tool: toolName,
      status: 'success',
      executedAt: new Date().toISOString(),
      payloadReceived: payload,
      executionHash: Math.random().toString(36).substring(2, 15)
    };
  };

  // Handler: Execute Scenario
  const handleExecuteScenario = (scenario: WhatIfScenario) => {
    if (scenario.actionType === 'swarm') {
      setTasks(prev => prev.map(t => {
        if (scenario.targetTaskIds.includes(t.id)) {
          return { ...t, progress: Math.min(1.0, t.progress + 0.4) };
        }
        return t;
      }));
    } else if (scenario.actionType === 'trade') {
      setCurrentCompany(prev => ({ ...prev, credits: prev.credits + 35 }));
    } else if (scenario.actionType === 'descope') {
      setTasks(prev => prev.map(t => {
        if (scenario.targetTaskIds.includes(t.id)) {
          return { ...t, progress: 1.0, completed: true };
        }
        return t;
      }));
    }
  };

  // Handler: AI Copilot Prompt Submit
  const handleCopilotPromptSubmit = async (prompt: string): Promise<string> => {
    const lower = prompt.toLowerCase();

    if (lower.includes('accelerate') || lower.includes('qa') || lower.includes('sprint') || lower.includes('schedule')) {
      const taskT5 = tasks.find(t => t.id === 'T5');
      if (taskT5) {
        handleTaskProgressUpdate('T5', 1.0);
        return `I analyzed the PERT graph and accelerated Task T5 (Auth Service & OAuth2/OIDC SSO Integration) to 100% completion. Critical path health improved by 15%.`;
      }
    }

    if (lower.includes('prospect') || lower.includes('radar') || lower.includes('scan') || lower.includes('texas')) {
      handleRunSignalRadar('Enterprise SaaS');
      return `Executed Signal Radar scan across Texas tech ecosystems. Identified 1 new high-fit prospect (Apex Data Intelligence) with a $18M Series A trigger. Draft sequence generated for your review.`;
    }

    if (lower.includes('trade') || lower.includes('credit') || lower.includes('lend')) {
      setCurrentCompany(prev => ({ ...prev, credits: prev.credits + 35 }));
      return `Executed FFX Slack Credit transaction: Borrowed 1 QA Specialist from Apex Systems Solutions for 35 credits. Unblocked Critical Path Task T9.`;
    }

    if (lower.includes('tax') || lower.includes('saas') || lower.includes('texas')) {
      return `Applied Texas Tax Code § 151.351: For a $10,000 SaaS fee, 80% ($8,000) is taxable at the 8.25% Austin rate, resulting in $660 sales tax due (effective tax rate of 6.6%).`;
    }

    return `FlowForge Multi-Agent Swarm executed your request: "${prompt}". PERT dependencies recalculated, capacity verified, and cryptographic audit log updated.`;
  };

  // If in Marketing Website mode
  if (viewMode === 'marketing') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased">
        {/* FlowForge Unified Top Synchronized Bar */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs select-none">
          <div className="flex items-center space-x-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold text-white tracking-tight text-sm">FlowForge Stability OS</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-400 font-mono text-xs font-bold">flowforge.fit</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400 text-[11px] hidden md:inline">Texas Entity #08051239 • Texas Tax Code § 151.351 (80% SaaS Exemption)</span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => handleSwitchToMarketing()}
                className="px-3 py-1.5 rounded-lg font-bold text-xs bg-cyan-500 text-slate-950 shadow-md flex items-center space-x-1.5 cursor-pointer"
              >
                <GlobeIcon className="w-3.5 h-3.5" />
                <span>🌐 flowforge.fit Website</span>
              </button>
              <button
                onClick={() => handleSwitchToApp()}
                className="px-3 py-1.5 rounded-lg font-semibold text-xs text-slate-300 hover:text-white hover:bg-slate-850 flex items-center space-x-1.5 cursor-pointer transition"
              >
                <BotIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>🚀 Platform OS Dashboard</span>
              </button>
            </div>
          </div>
        </div>

        <MarketingSite
          initialPage={marketingPage}
          onPageChange={(page) => {
            setMarketingPage(page);
            window.location.hash = page;
          }}
          onEnterApp={() => handleSwitchToApp()}
          onOpenLogin={() => setViewMode('auth')}
          onOpenCreditModal={() => {
            setViewMode('app');
            setIsCreditModalOpen(true);
          }}
        />
      </div>
    );
  }

  // If in Branded Auth Portal mode
  if (viewMode === 'auth') {
    return (
      <AuthView
        companies={companies}
        onLoginSuccess={(role, email) => {
          setActiveUserRole(role);
          setUserEmail(email);
          setViewMode('app');
        }}
        onBackToMarketing={() => handleSwitchToMarketing('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased">
      {/* FlowForge Unified Top Synchronized Bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs select-none">
        <div className="flex items-center space-x-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-extrabold text-white tracking-tight text-sm">FlowForge Stability OS</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-mono text-xs font-bold">flowforge.fit</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-400 text-[11px] hidden md:inline">
            Active Session: <strong className="text-cyan-300">{userEmail}</strong> ({activeUserRole})
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => handleSwitchToMarketing()}
              className="px-3 py-1.5 rounded-lg font-semibold text-xs text-slate-300 hover:text-white hover:bg-slate-850 flex items-center space-x-1.5 cursor-pointer transition"
            >
              <GlobeIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>🌐 flowforge.fit Website</span>
            </button>
            <button
              onClick={() => handleSwitchToApp()}
              className="px-3 py-1.5 rounded-lg font-bold text-xs bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-md flex items-center space-x-1.5 cursor-pointer"
            >
              <BotIcon className="w-3.5 h-3.5" />
              <span>🚀 Platform OS Dashboard</span>
            </button>
          </div>
          <button
            onClick={() => setViewMode('auth')}
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-rose-300 border border-slate-800 text-[11px] transition cursor-pointer"
            title="Switch User Persona or Sign Out"
          >
            🔑 Auth
          </button>
        </div>
      </div>

      {/* Top Header */}
      <Header
        currentCompany={currentCompany}
        companies={companies}
        onSelectCompany={setCurrentCompany}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenWhatIf={() => setIsWhatIfOpen(true)}
        onOpenCreditModal={() => setIsCreditModalOpen(true)}
        onOpenCompanyModal={() => setIsCompanyModalOpen(true)}
        onSwitchToMarketing={() => handleSwitchToMarketing('home')}
        onSwitchToAuth={() => setViewMode('auth')}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Mobile Horizontal Navigation Tab Bar */}
      <div className="md:hidden flex items-center overflow-x-auto space-x-1.5 p-2 bg-slate-900 border-b border-slate-800 text-xs no-scrollbar">
        {[
          { id: 'ai_deal_closer', label: '🤖 AI Deal Closer (Autopilot)' },
          { id: 'mvp_revenue', label: '⭐ The Money Path (MVP)' },
          { id: 'stability_core', label: 'Stability Core (Live Loop)' },
          { id: 'enterprise_readiness', label: 'Enterprise Readiness' },
          { id: 'expansion_suite', label: 'Expansion Suite' },
          { id: 'expansion_suite_part2', label: 'Investor & Tech' },
          { id: 'expansion_suite_part3', label: 'Field Guide & GTM' },
          { id: 'expansion_suite_part4', label: 'Analyst & Economics' },
          { id: 'expansion_suite_part5', label: 'Keynote & Sales' },
          { id: 'expansion_suite_part6', label: 'Analyst & Category' },
          { id: 'expansion_suite_part7', label: 'Total Enterprise Stack' },
          { id: 'expansion_suite_part8', label: 'Global Expansion & Domination' },
          { id: 'expansion_suite_part9', label: 'Founder & Capital Strategy' },
          { id: 'expansion_suite_part10', label: 'Global Ops, Finance & Arch' },
          { id: 'part14_final_package', label: '⭐ Stability OS 4.0 & Launch' },
          { id: 'master_business_plan', label: 'Master Business Plan' },
          { id: 'total_business_architecture', label: 'Total Business Architecture' },
          { id: 'executive', label: 'Executive AI' },
          { id: 'orchestration', label: 'Gantt & DAG' },
          { id: 'exchange', label: 'FFX Exchange' },
          { id: 'billing', label: 'Monetization' },
          { id: 'outreach', label: 'AI Acquisition' },
          { id: 'mcp', label: 'MCP Tools' },
          { id: 'compliance', label: 'Texas Legal' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition cursor-pointer ${
              activeTab === tab.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Layout Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          pendingApprovalsCount={pendingApprovalsCount}
          onSwitchToMarketing={handleSwitchToMarketing}
          onSwitchToAuth={() => setViewMode('auth')}
        />

        {/* Tab Content View Area */}
        <main className="flex-1 overflow-y-auto pb-12">
          {activeTab === 'ai_deal_closer' && (
            <AiDealCloserView />
          )}

          {activeTab === 'mvp_revenue' && (
            <MvpRevenueExecutionView onNavigateToAiCloser={() => setActiveTab('ai_deal_closer')} />
          )}

          {activeTab === 'stability_core' && (
            <StabilityDashboardView
              onOpenCopilot={() => setIsCopilotOpen(true)}
              onOpenWhatIf={() => setIsWhatIfOpen(true)}
              onNavigateToEnterpriseReadiness={() => setActiveTab('enterprise_readiness')}
            />
          )}

          {activeTab === 'enterprise_readiness' && (
            <EnterpriseReadinessView
              onNavigateToStability={() => setActiveTab('stability_core')}
            />
          )}

          {activeTab === 'expansion_suite' && (
            <EnterpriseExpansionSuiteView
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
            />
          )}

          {activeTab === 'expansion_suite_part2' && (
            <EnterpriseExpansionSuitePart2View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
            />
          )}

          {activeTab === 'expansion_suite_part3' && (
            <EnterpriseExpansionSuitePart3View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
            />
          )}

          {activeTab === 'expansion_suite_part4' && (
            <EnterpriseExpansionSuitePart4View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
            />
          )}

          {activeTab === 'expansion_suite_part5' && (
            <EnterpriseExpansionSuitePart5View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
            />
          )}

          {activeTab === 'expansion_suite_part6' && (
            <EnterpriseExpansionSuitePart6View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToTotalBusinessArchitecture={() => setActiveTab('total_business_architecture')}
            />
          )}

          {activeTab === 'expansion_suite_part7' && (
            <EnterpriseExpansionSuitePart7View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
              onNavigateToPart8={() => setActiveTab('expansion_suite_part8')}
              onNavigateToMasterBusinessPlan={() => setActiveTab('master_business_plan')}
              onNavigateToTotalBusinessArchitecture={() => setActiveTab('total_business_architecture')}
            />
          )}

          {activeTab === 'expansion_suite_part8' && (
            <EnterpriseExpansionSuitePart8View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
              onNavigateToPart7={() => setActiveTab('expansion_suite_part7')}
              onNavigateToPart9={() => setActiveTab('expansion_suite_part9')}
              onNavigateToMasterBusinessPlan={() => setActiveTab('master_business_plan')}
              onNavigateToTotalBusinessArchitecture={() => setActiveTab('total_business_architecture')}
            />
          )}

          {activeTab === 'expansion_suite_part9' && (
            <EnterpriseExpansionSuitePart9View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
              onNavigateToPart7={() => setActiveTab('expansion_suite_part7')}
              onNavigateToPart8={() => setActiveTab('expansion_suite_part8')}
              onNavigateToPart10={() => setActiveTab('expansion_suite_part10')}
              onNavigateToMasterBusinessPlan={() => setActiveTab('master_business_plan')}
              onNavigateToTotalBusinessArchitecture={() => setActiveTab('total_business_architecture')}
            />
          )}

          {activeTab === 'expansion_suite_part10' && (
            <EnterpriseExpansionSuitePart10View
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
              onNavigateToPart7={() => setActiveTab('expansion_suite_part7')}
              onNavigateToPart8={() => setActiveTab('expansion_suite_part8')}
              onNavigateToPart9={() => setActiveTab('expansion_suite_part9')}
              onNavigateToMasterBusinessPlan={() => setActiveTab('master_business_plan')}
              onNavigateToTotalBusinessArchitecture={() => setActiveTab('total_business_architecture')}
            />
          )}

          {activeTab === 'part14_final_package' && (
            <TotalEnterprisePart14View
              onNavigateToStability={() => setActiveTab('stability_core')}
            />
          )}

          {activeTab === 'master_business_plan' && (
            <MasterBusinessPlanView
              onNavigateToTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'total_business_architecture' && (
            <TotalBusinessArchitectureView
              onNavigateToStability={() => setActiveTab('stability_core')}
              onNavigateToPart1={() => setActiveTab('expansion_suite')}
              onNavigateToPart2={() => setActiveTab('expansion_suite_part2')}
              onNavigateToPart3={() => setActiveTab('expansion_suite_part3')}
              onNavigateToPart4={() => setActiveTab('expansion_suite_part4')}
              onNavigateToPart5={() => setActiveTab('expansion_suite_part5')}
              onNavigateToPart6={() => setActiveTab('expansion_suite_part6')}
              onNavigateToPart7={() => setActiveTab('expansion_suite_part7')}
              onNavigateToPart8={() => setActiveTab('expansion_suite_part8')}
              onNavigateToPart9={() => setActiveTab('expansion_suite_part9')}
              onNavigateToPart10={() => setActiveTab('expansion_suite_part10')}
              onNavigateToMasterBusinessPlan={() => setActiveTab('master_business_plan')}
            />
          )}

          {activeTab === 'executive' && (
            <ExecutiveIntelligenceView
              tasks={tasks}
              resources={resources}
              currentCompany={currentCompany}
              prospects={prospects}
              onApplyBurnoutShield={handleApplyBurnoutShield}
              onExecuteCriticalPathRescue={handleExecuteCriticalPathRescue}
              burnoutShieldActive={burnoutShieldActive}
              criticalPathRescued={criticalPathRescued}
            />
          )}

          {activeTab === 'orchestration' && (
            <OrchestrationView
              tasks={tasks}
              resources={resources}
              scenarios={scenarios}
              onTaskProgressUpdate={handleTaskProgressUpdate}
              onExecuteScenario={handleExecuteScenario}
              onOpenWhatIf={() => setIsWhatIfOpen(true)}
            />
          )}

          {activeTab === 'exchange' && (
            <ExchangeView
              currentCompany={currentCompany}
              companies={companies}
              trades={trades}
              onExecuteTrade={handleExecuteTrade}
              onProposeNewTrade={handleProposeNewTrade}
              onOpenCreditModal={() => setIsCreditModalOpen(true)}
              onOpenCompanyModal={() => setIsCompanyModalOpen(true)}
              onDeleteCompany={handleDeleteCompany}
              onDeleteTrade={handleDeleteTrade}
              onPurgeAllDemoData={handlePurgeAllDemoData}
            />
          )}

          {activeTab === 'billing' && (
            <BillingView
              currentCompany={currentCompany}
              companies={companies}
              onOpenCreditModal={() => setIsCreditModalOpen(true)}
              onUpdateSubscription={handleUpdateSubscription}
            />
          )}

          {activeTab === 'outreach' && (
            <OutreachView
              prospects={prospects}
              onApproveSequence={handleApproveProspectSequence}
              onRejectSequence={handleRejectProspectSequence}
              onRunSignalRadar={handleRunSignalRadar}
            />
          )}

          {activeTab === 'mcp' && (
            <McpGatewayView
              mcpServers={mcpServers}
              auditLogs={auditLogs}
              onExecuteTool={handleExecuteTool}
            />
          )}

          {activeTab === 'compliance' && (
            <ComplianceView
              deadlines={deadlines}
            />
          )}
        </main>
      </div>

      {/* Modals */}
      <CopilotModal
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        onPromptSubmit={handleCopilotPromptSubmit}
      />

      <WhatIfModal
        isOpen={isWhatIfOpen}
        onClose={() => setIsWhatIfOpen(false)}
        scenarios={scenarios}
        onExecuteScenario={handleExecuteScenario}
      />

      <CreditPurchaseModal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
        currentCompany={currentCompany}
        onPurchaseComplete={handleCreditPurchase}
      />

      <CompanyManagementModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
        companies={companies}
        trades={trades}
        currentCompany={currentCompany}
        onAddCompany={handleAddCompany}
        onDeleteCompany={handleDeleteCompany}
        onDeleteTrade={handleDeleteTrade}
        onPurgeAllDemoData={handlePurgeAllDemoData}
        onRestoreSampleData={handleRestoreSampleData}
      />
    </div>
  );
}
