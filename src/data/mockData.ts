import { Task, ResourcePerson, Company, TradeExchange, Prospect, McpServer, AuditLogEntry, ComplianceDeadline, WhatIfScenario } from '../types';

export const INITIAL_TASKS: Task[] = [
  { id: 'T1', name: 'Requirements & Architectural Signoff', effort: 5, skill: 'BA', progress: 1.0, completed: true, assignedResource: 'Frank Miller', isCriticalPath: true, dependencies: [], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'completed' },
  { id: 'T2', name: 'Cloud Infrastructure & Kubernetes Mesh', effort: 8, skill: 'DevOps', progress: 1.0, completed: true, assignedResource: 'Charlie Vance', isCriticalPath: true, dependencies: ['T1'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'completed' },
  { id: 'T3', name: 'PostgreSQL & Neo4j Graph Schema Design', effort: 6, skill: 'DBE', progress: 1.0, completed: true, assignedResource: 'Eve Wright', isCriticalPath: false, dependencies: ['T1'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'completed' },
  { id: 'T4', name: 'API Gateway & Rate Limiter Configuration', effort: 4, skill: 'DevOps', progress: 0.85, completed: false, assignedResource: 'Charlie Vance', isCriticalPath: true, dependencies: ['T2'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T5', name: 'Auth Service & OAuth2/OIDC SSO Integration', effort: 10, skill: 'Backend', progress: 0.60, completed: false, assignedResource: 'Alice Johnson', isCriticalPath: true, dependencies: ['T4'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T6', name: 'Inter-Company Credit Engine & Ledger', effort: 15, skill: 'Backend', progress: 0.40, completed: false, assignedResource: 'Henry Zhao', isCriticalPath: false, dependencies: ['T4'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T7', name: 'Frontend React Storefront & Gantt UI', effort: 20, skill: 'Frontend', progress: 0.35, completed: false, assignedResource: 'Bob Martinez', isCriticalPath: true, dependencies: ['T5', 'T6'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T8', name: 'Admin Operations & Compliance Portal', effort: 12, skill: 'Frontend', progress: 0.20, completed: false, assignedResource: 'Grace Lee', isCriticalPath: false, dependencies: ['T5', 'T6'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T9', name: 'Cross-Org Integration & QA Load Testing', effort: 10, skill: 'QA', progress: 0.0, completed: false, assignedResource: 'Diana Prince', isCriticalPath: true, dependencies: ['T7', 'T8'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'pending' },
  { id: 'T10', name: 'UAT & Texas Enterprise Signoff', effort: 5, skill: 'BA', progress: 0.0, completed: false, assignedResource: 'Frank Miller', isCriticalPath: true, dependencies: ['T9'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'pending' },
  { id: 'T11', name: 'Data Migration & Vector Indexing', effort: 7, skill: 'DBE', progress: 0.50, completed: false, assignedResource: 'Eve Wright', isCriticalPath: false, dependencies: ['T3'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
  { id: 'T12', name: 'Performance Tuning & GNN Optimization', effort: 6, skill: 'DevOps', progress: 0.10, completed: false, assignedResource: 'Charlie Vance', isCriticalPath: false, dependencies: ['T2'], companyOwner: 'CFO TAX PRO LLC (dba FlowForge)', status: 'in_progress' },
];

export const INITIAL_RESOURCES: ResourcePerson[] = [
  { id: 'R1', name: 'Alice Johnson', skill: 'Backend', seniority: 0.95, utilization: 0.88, company: 'CFO TAX PRO LLC (dba FlowForge)', recentTasks: ['T5', 'T6'], cognitiveLoad: 82, hourlyRate: 165 },
  { id: 'R2', name: 'Bob Martinez', skill: 'Frontend', seniority: 0.85, utilization: 0.92, company: 'CFO TAX PRO LLC (dba FlowForge)', recentTasks: ['T7'], cognitiveLoad: 88, hourlyRate: 145 },
  { id: 'R3', name: 'Charlie Vance', skill: 'DevOps', seniority: 0.98, utilization: 0.95, company: 'CFO TAX PRO LLC (dba FlowForge)', recentTasks: ['T2', 'T4', 'T12'], cognitiveLoad: 91, hourlyRate: 185 },
  { id: 'R4', name: 'Diana Prince', skill: 'QA', seniority: 0.75, utilization: 0.35, company: 'Apex Systems LLC', recentTasks: ['T9'], cognitiveLoad: 40, hourlyRate: 120 },
  { id: 'R5', name: 'Eve Wright', skill: 'DBE', seniority: 0.90, utilization: 0.70, company: 'CFO TAX PRO LLC (dba FlowForge)', recentTasks: ['T3', 'T11'], cognitiveLoad: 68, hourlyRate: 160 },
  { id: 'R6', name: 'Frank Miller', skill: 'BA', seniority: 0.80, utilization: 0.50, company: 'CFO TAX PRO LLC (dba FlowForge)', recentTasks: ['T1', 'T10'], cognitiveLoad: 52, hourlyRate: 135 },
  { id: 'R7', name: 'Grace Lee', skill: 'Frontend', seniority: 0.65, utilization: 0.60, company: 'Nexus Global', recentTasks: ['T8'], cognitiveLoad: 62, hourlyRate: 110 },
  { id: 'R8', name: 'Henry Zhao', skill: 'Backend', seniority: 0.60, utilization: 0.45, company: 'Cognitive Dynamics', recentTasks: ['T6'], cognitiveLoad: 48, hourlyRate: 115 },
];

export const INITIAL_COMPANIES: Company[] = [
  { 
    id: 'C1', 
    name: 'CFO TAX PRO LLC (dba FlowForge)', 
    industry: 'Enterprise AI & Financial Orchestration', 
    credits: 2500, 
    reputation: 0.99, 
    activeTrades: 0, 
    idleCapacityPercent: 15, 
    trustScore: 99, 
    location: 'Dallas, TX',
    isAnchorCompany: true,
    isDemoCompany: false,
    sosFileNumber: '08051239',
    contactEmail: 'admin@flowforge.fit',
    servicesOffered: ['Full-Stack AI Orchestration', 'DevOps Kubernetes Mesh', 'FinTech Tax Compliance API']
  },
  { 
    id: 'C2', 
    name: 'Apex Systems Solutions', 
    industry: 'Cloud Infrastructure & DevOps', 
    credits: 890, 
    reputation: 0.91, 
    activeTrades: 3, 
    idleCapacityPercent: 35, 
    trustScore: 92, 
    location: 'Dallas, TX',
    isDemoCompany: true,
    servicesOffered: ['Senior QA Automation', 'Kubernetes Cluster Scaling']
  },
  { 
    id: 'C3', 
    name: 'Nexus Global Tech', 
    industry: 'Fintech & Payment Systems', 
    credits: 620, 
    reputation: 0.88, 
    activeTrades: 2, 
    idleCapacityPercent: 28, 
    trustScore: 89, 
    location: 'Houston, TX',
    isDemoCompany: true,
    servicesOffered: ['PCI-DSS Compliance', 'Payment Gateway Integration']
  },
  { 
    id: 'C4', 
    name: 'Cognitive Dynamics Labs', 
    industry: 'Healthcare & Data Analytics', 
    credits: 1100, 
    reputation: 0.94, 
    activeTrades: 5, 
    idleCapacityPercent: 18, 
    trustScore: 95, 
    location: 'San Antonio, TX',
    isDemoCompany: true,
    servicesOffered: ['HIPAA Data Pipeline', 'Backend Security Architecture']
  },
  { 
    id: 'C5', 
    name: 'Veritas Logistics Group', 
    industry: 'Supply Chain & IoT', 
    credits: 450, 
    reputation: 0.82, 
    activeTrades: 1, 
    idleCapacityPercent: 42, 
    trustScore: 84, 
    location: 'Fort Worth, TX',
    isDemoCompany: true,
    servicesOffered: ['IoT Telemetry', 'Edge Node Infrastructure']
  },
];

export const INITIAL_TRADES: TradeExchange[] = [
  {
    id: 'TR-8821',
    timestamp: '2026-08-12 14:22',
    lenderCompany: 'Apex Systems Solutions',
    borrowerCompany: 'CFO TAX PRO LLC (dba FlowForge)',
    resourceRole: 'Senior QA Engineer (Diana Prince)',
    quantity: 1,
    durationDays: 3,
    creditsExchanged: 35,
    status: 'active',
    aiConfidence: 0.92,
    reasoning: 'Apex has 35% idle QA capacity. FlowForge T9 task is on the Critical Path with 0% progress. Lending Diana unblocks launch by 2.5 days.',
    isDemoTrade: true
  },
  {
    id: 'TR-8819',
    timestamp: '2026-08-11 09:15',
    lenderCompany: 'Cognitive Dynamics Labs',
    borrowerCompany: 'Nexus Global Tech',
    resourceRole: 'Backend Security Architect',
    quantity: 2,
    durationDays: 5,
    creditsExchanged: 60,
    status: 'completed',
    aiConfidence: 0.88,
    reasoning: 'Nexus required urgent PCI-DSS compliance audit. Cognitive Dynamics supplied certified security architects for 60 FFX credits.',
    isDemoTrade: true
  },
  {
    id: 'TR-8824',
    timestamp: '2026-08-12 16:05',
    lenderCompany: 'Veritas Logistics Group',
    borrowerCompany: 'Apex Systems Solutions',
    resourceRole: 'DevOps Kubernetes Specialist',
    quantity: 1,
    durationDays: 4,
    creditsExchanged: 45,
    status: 'pending_approval',
    aiConfidence: 0.85,
    reasoning: 'Veritas has surplus DevOps bandwidth during low shipping cycle. Apex needs cluster scaling assistance.',
    isDemoTrade: true
  }
];

export const INITIAL_PROSPECTS: Prospect[] = [
  {
    id: 'P-101',
    companyName: 'Lumina Cloud Analytics',
    domain: 'luminacloud.io',
    industry: 'Enterprise SaaS',
    sizeRange: '100-250 employees',
    location: 'Austin, TX',
    fitScore: 94,
    status: 'awaiting_approval',
    signals: [
      { type: 'funding', source: 'Crunchbase', headline: 'Lumina Cloud Raises $32M Series B for Data Intelligence Platform', summary: 'Round led by Texas Venture Partners to expand sales engineering & cloud infrastructure.', severity: 9, timestamp: '2026-08-10' },
      { type: 'hiring_spree', source: 'LinkedIn', headline: 'Opened 18 new engineering and DevOps roles', summary: 'Engineering team expanding rapidly, causing onboarding bottlenecks.', severity: 8, timestamp: '2026-08-08' }
    ],
    techStack: ['AWS', 'Kubernetes', 'React', 'Python', 'Snowflake', 'Kafka'],
    painPoints: ['Developer context-switching causing release delays', 'DevOps bottleneck during sprint deployments'],
    keyPeople: [
      { name: 'Dr. Marcus Vance', title: 'Chief Technology Officer', linkedin: 'https://linkedin.com' },
      { name: 'Elena Rostova', title: 'VP of Engineering', linkedin: 'https://linkedin.com' }
    ],
    outreachSequence: [
      {
        id: 'MSG-1',
        sequenceNumber: 1,
        channel: 'email',
        subject: 'Congrats on Lumina\'s Series B + unblocking your DevOps queue',
        content: `Hi Dr. Vance,

Congrats on Lumina's recent $32M Series B announcement! 

Noticed your team is scaling engineering fast while managing multi-cloud Kubernetes deployments. When teams expand this rapidly, developer context-switching typically inflates sprint cycles by 25-30%.

At FlowForge, we built an AI Orchestration Layer that automates dependency routing and lets software enterprises trade idle resource capacity in real time. For example, Apex Systems unblocked their deployment queue in under 48 hours using our cognitive scheduler.

Would you be open to a brief 15-minute conversation next Tuesday at 10:00 AM CT to explore how this could streamline Lumina's sprint velocity?

Best regards,
Chukwuma Oduagu
Managing Partner & CEO, CFO TAX PRO LLC (dba FlowForge)
admin@flowforge.fit | flowforge.fit`,
        personalizationHook: 'Series B funding + Kubernetes scaling context-switch penalty',
        status: 'pending_review'
      },
      {
        id: 'MSG-2',
        sequenceNumber: 2,
        channel: 'linkedin',
        subject: 'LinkedIn Connection & Brief Note',
        content: `Hi Dr. Vance, enjoyed reading about Lumina's Series B expansion into cloud data intelligence. We recently helped fellow Texas tech enterprises reduce sprint context-switching by 32% with FlowForge AI orchestration. Would love to connect!`,
        personalizationHook: 'Series B expansion + Texas tech enterprise connection',
        status: 'pending_review'
      },
      {
        id: 'MSG-3',
        sequenceNumber: 3,
        channel: 'call_script',
        subject: 'Executive Discovery Call Script',
        content: `Introduction: "Hi Dr. Vance, Chukwuma here from FlowForge (CFO TAX PRO LLC) in Dallas. Saw Lumina's Series B news—congrats!"
Hook: "I know scaling from 100 to 250 engineers creates massive friction in QA and deployment queues."
Value Prop: "We provide an AI scheduler that dynamically eliminates context penalties and shares capacity."
CTA: "Can I send over a 2-minute interactive simulation showing how Lumina could save 12 hours per dev per week?"`,
        personalizationHook: 'Texas local connection + engineering scaling pain point',
        status: 'pending_review'
      }
    ]
  },
  {
    id: 'P-102',
    companyName: 'Strata Health Systems',
    domain: 'stratahealth.com',
    industry: 'Healthcare & IT',
    sizeRange: '250-500 employees',
    location: 'Dallas, TX',
    fitScore: 89,
    status: 'researched',
    signals: [
      { type: 'leadership_change', source: 'BusinessWire', headline: 'Strata Health Appoints Former Epic VP as Chief Information Officer', summary: 'New CIO focusing on HIPAA compliance and modern AI workflow integration.', severity: 8, timestamp: '2026-08-05' }
    ],
    techStack: ['Azure', 'PostgreSQL', 'Epic Systems', 'Docker', 'GraphQL'],
    painPoints: ['Strict regulatory audit requirements for cross-team tasks', 'High contractor billing overhead'],
    keyPeople: [
      { name: 'David Sterling', title: 'Chief Information Officer', linkedin: 'https://linkedin.com' }
    ],
    outreachSequence: []
  },
  {
    id: 'P-103',
    companyName: 'OmniPay Financial Tech',
    domain: 'omnipay.tech',
    industry: 'Fintech & Banking',
    sizeRange: '50-100 employees',
    location: 'Houston, TX',
    fitScore: 91,
    status: 'outreach_active',
    signals: [
      { type: 'product_launch', source: 'Finovate', headline: 'OmniPay Unveils Real-Time Cross-Border Settlement API', summary: 'Expanding core API services across North America and LATAM.', severity: 9, timestamp: '2026-08-02' }
    ],
    techStack: ['GCP', 'Kafka', 'Go', 'Kubernetes', 'Stripe API'],
    painPoints: ['PCI-DSS audit bottlenecking sprint deployments', 'QA engineer shortage'],
    keyPeople: [
      { name: 'Sarah Chen', title: 'VP of Product Architecture', linkedin: 'https://linkedin.com' }
    ],
    outreachSequence: []
  }
];

export const INITIAL_MCP_SERVERS: McpServer[] = [
  {
    id: 'mcp-1',
    name: 'Accounting & Fintech MCP',
    description: 'Handles invoice generation, 80% SaaS Texas tax calculations, credit ledger, and financial audit logs.',
    port: 8001,
    endpoint: 'http://localhost:8001',
    status: 'healthy',
    toolsCount: 6,
    tools: [
      {
        name: 'calculate_texas_saas_tax',
        description: 'Calculates Texas sales tax where 80% of SaaS fee is taxable at combined state/local rates (max 8.25%).',
        server: 'Accounting & Fintech MCP',
        parametersSchema: { fee: 'number', localTaxRate: 'number' },
        samplePayload: { fee: 5000, localTaxRate: 0.02 }
      },
      {
        name: 'mint_ffx_credits',
        description: 'Mints FFX credits backed by USD reserve deposits for inter-company trading.',
        server: 'Accounting & Fintech MCP',
        parametersSchema: { companyId: 'string', usdAmount: 'number' },
        samplePayload: { companyId: 'C1', usdAmount: 1000 }
      }
    ]
  },
  {
    id: 'mcp-2',
    name: 'ERP & Operations MCP',
    description: 'Connects to SAP, Jira, and Kubernetes to extract project DAGs, task efforts, and capacity constraints.',
    port: 8002,
    endpoint: 'http://localhost:8002',
    status: 'healthy',
    toolsCount: 8,
    tools: [
      {
        name: 'query_project_dag',
        description: 'Extracts task nodes, predecessor edges, and critical paths from ERP/Jira instances.',
        server: 'ERP & Operations MCP',
        parametersSchema: { projectId: 'string' },
        samplePayload: { projectId: 'PRJ-MIGRATION-2026' }
      }
    ]
  },
  {
    id: 'mcp-3',
    name: 'Signal Detection & Prospect MCP',
    description: 'Scans Crunchbase, LinkedIn, TechCrunch, and Reddit for buying triggers and growth signals.',
    port: 8100,
    endpoint: 'http://localhost:8100',
    status: 'healthy',
    toolsCount: 5,
    tools: [
      {
        name: 'detect_buying_signals',
        description: 'Monitors real-time web news and social streams for funding rounds, hiring sprees, and leadership changes.',
        server: 'Signal Detection & Prospect MCP',
        parametersSchema: { companyName: 'string', industry: 'string' },
        samplePayload: { companyName: 'Lumina Cloud Analytics', industry: 'Enterprise SaaS' }
      }
    ]
  },
  {
    id: 'mcp-4',
    name: 'Deep Research & Outreach MCP',
    description: 'Scrapes company websites, identifies pain points, and generates multi-channel personalized outreach sequences.',
    port: 8101,
    endpoint: 'http://localhost:8101',
    status: 'healthy',
    toolsCount: 7,
    tools: [
      {
        name: 'generate_outreach_sequence',
        description: 'Drafts tailored email, LinkedIn message, and call script with specific personalization hooks.',
        server: 'Deep Research & Outreach MCP',
        parametersSchema: { companyName: 'string', targetTitle: 'string', painPoints: 'array' },
        samplePayload: { companyName: 'Lumina Cloud Analytics', targetTitle: 'CTO', painPoints: ['Developer context switching'] }
      }
    ]
  },
  {
    id: 'mcp-5',
    name: 'Data Management & Clean Governance MCP',
    description: 'Autonomous data operations for company onboarding, demo entity purging, and Texas entity registry verification.',
    port: 8102,
    endpoint: 'http://localhost:8102',
    status: 'healthy',
    toolsCount: 4,
    tools: [
      {
        name: 'flowforge_delete_company',
        description: 'Destructively purges demo, test, or defunct enterprise nodes from the network ledger.',
        server: 'Data Management & Clean Governance MCP',
        parametersSchema: { companyId: 'string', confirmPurge: 'boolean' },
        samplePayload: { companyId: 'C2', confirmPurge: true }
      },
      {
        name: 'flowforge_delete_trade',
        description: 'Permanently removes or archives test/demo capacity trades with cryptographic verification.',
        server: 'Data Management & Clean Governance MCP',
        parametersSchema: { tradeId: 'string', reason: 'string' },
        samplePayload: { tradeId: 'TR-8821', reason: 'Purge demo trades for live production rollout' }
      },
      {
        name: 'flowforge_register_company',
        description: 'Registers a real production entity with Texas SOS file number, physical location, and initial FFX reserve.',
        server: 'Data Management & Clean Governance MCP',
        parametersSchema: { name: 'string', industry: 'string', location: 'string', sosFileNumber: 'string', initialCredits: 'number' },
        samplePayload: { name: 'CFO TAX PRO LLC', industry: 'Enterprise AI & Financial Orchestration', location: 'Dallas, TX', sosFileNumber: '08051239', initialCredits: 2500 }
      }
    ]
  },
  {
    id: 'mcp-6',
    name: 'Agent Marketplace & x402 Micropayments MCP',
    description: 'Agent-to-agent autonomous service discovery, negotiation, and smart escrow trade settlement via x402 protocols.',
    port: 8103,
    endpoint: 'http://localhost:8103',
    status: 'healthy',
    toolsCount: 5,
    tools: [
      {
        name: 'agentmarketplace_discover_services',
        description: 'Discovers available autonomous agent tools and human capacity across AgentPact and SavantDex networks.',
        server: 'Agent Marketplace & x402 Micropayments MCP',
        parametersSchema: { requiredSkill: 'string', maxCredits: 'number' },
        samplePayload: { requiredSkill: 'QA Automation', maxCredits: 50 }
      },
      {
        name: 'agentmarketplace_execute_x402_trade',
        description: 'Executes autonomous agent contract, locks payment in escrow, and retains FlowForge 5% platform take-rate.',
        server: 'Agent Marketplace & x402 Micropayments MCP',
        parametersSchema: { lender: 'string', borrower: 'string', role: 'string', credits: 'number', escrowDurationHours: 'number' },
        samplePayload: { lender: 'Apex Systems Solutions', borrower: 'CFO TAX PRO LLC (dba FlowForge)', role: 'Senior QA Engineer', credits: 35, escrowDurationHours: 72 }
      }
    ]
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'LOG-9001',
    timestamp: '2026-08-12 17:30:12',
    action: 'RESOURCE_TRADE_EXECUTED',
    entityType: 'TradeExchange',
    entityId: 'TR-8821',
    actor: 'AI_AGENT_SCHEDULER',
    previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
    hash: 'a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890',
    status: 'verified'
  },
  {
    id: 'LOG-9002',
    timestamp: '2026-08-12 17:32:45',
    action: 'OUTREACH_SEQUENCE_GENERATED',
    entityType: 'Prospect',
    entityId: 'P-101',
    actor: 'RESEARCH_AGENT_SWARM',
    previousHash: 'a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4e5f67890',
    hash: 'f6e5d4c3b2a10987f6e5d4c3b2a10987f6e5d4c3b2a10987f6e5d4c3b2a10987',
    status: 'verified'
  },
  {
    id: 'LOG-9003',
    timestamp: '2026-08-12 17:35:00',
    action: 'TEXAS_SAAS_TAX_CALCULATED',
    entityType: 'Invoice',
    entityId: 'INV-2026-042',
    actor: 'ACCOUNTING_MCP_SERVER',
    previousHash: 'f6e5d4c3b2a10987f6e5d4c3b2a10987f6e5d4c3b2a10987f6e5d4c3b2a10987',
    hash: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
    status: 'verified'
  }
];

export const COMPLIANCE_DEADLINES: ComplianceDeadline[] = [
  { title: 'Texas Public Information Annual Report', dueDate: '2027-05-15', authority: 'Texas Secretary of State', description: 'Required annual filing verifying officers and registered agent address in Texas.', status: 'upcoming', fee: 0 },
  { title: 'Texas Franchise Tax Return', dueDate: '2027-05-15', authority: 'Texas Comptroller of Public Accounts', description: 'No tax due filing for gross receipts under $2.65M annualized threshold for 2026/2027.', status: 'upcoming', fee: 0 },
  { title: 'FinCEN Beneficial Ownership Info (BOI)', dueDate: '2026-09-12', authority: 'US Treasury FinCEN', description: 'Mandatory filing within 30 days of Texas LLC formation under Corporate Transparency Act.', status: 'action_required', fee: 0 },
  { title: 'Texas Business Personal Property Rendition', dueDate: '2027-04-15', authority: 'Dallas County Appraisal District (DCAD)', description: 'Rendition of business personal property equipment with $125K exemption filed with Dallas County.', status: 'upcoming', fee: 0 },
];

export const INITIAL_WHAT_IF_SCENARIOS: WhatIfScenario[] = [
  {
    id: 'SC-1',
    title: 'Swarm Critical Task T5 (Auth Service)',
    description: 'Assign 2 additional junior developers from Apex Systems for 4 hours to unblock Critical Path task T5.',
    timeSavingsDays: 2.5,
    costDeltaUSD: 380,
    cognitiveImpact: 'Reduces Alice\'s cognitive load from 82% to 58%',
    confidenceScore: 0.88,
    actionType: 'swarm',
    targetTaskIds: ['T5']
  },
  {
    id: 'SC-2',
    title: 'Lend Idle QA Bandwidth to Lumina Cloud',
    description: 'Trade 1 QA specialist to Lumina Cloud for 3 days in exchange for 35 FFX credits.',
    timeSavingsDays: 1.5,
    costDeltaUSD: -525, // Profit / income
    cognitiveImpact: 'Balances QA team utilization at optimal 75%',
    confidenceScore: 0.94,
    actionType: 'trade',
    targetTaskIds: ['T9']
  },
  {
    id: 'SC-3',
    title: 'De-Scope Non-Critical Task T8 (Admin Dashboard)',
    description: 'Push non-blocking Admin Dashboard sub-modules to Sprint 4 to ensure Day 1 launch date.',
    timeSavingsDays: 3.0,
    costDeltaUSD: 0,
    cognitiveImpact: 'Eliminates Grace\'s context-switching penalty',
    confidenceScore: 0.91,
    actionType: 'descope',
    targetTaskIds: ['T8']
  }
];
