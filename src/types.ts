export type ResourceSkill = 'Backend' | 'Frontend' | 'DevOps' | 'QA' | 'DBE' | 'BA' | 'AI / ML' | 'Security';

export interface Task {
  id: string;
  name: string;
  effort: number; // Story points or days
  skill: ResourceSkill;
  progress: number; // 0 to 1
  completed: boolean;
  assignedResource?: string;
  isCriticalPath: boolean;
  dependencies: string[]; // Predecessor task IDs
  companyOwner?: string;
  status: 'pending' | 'in_progress' | 'blocked' | 'completed';
}

export interface ResourcePerson {
  id: string;
  name: string;
  skill: ResourceSkill;
  seniority: number; // 0.1 to 1.0
  utilization: number; // 0 to 1.0
  company: string;
  recentTasks: string[]; // for context switching penalty
  cognitiveLoad: number; // 0 to 100%
  hourlyRate: number;
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  credits: number;
  reputation: number; // 0 to 1.0
  activeTrades: number;
  idleCapacityPercent: number;
  trustScore: number;
  location: string;
  isAnchorCompany?: boolean;
  isDemoCompany?: boolean;
  sosFileNumber?: string;
  contactEmail?: string;
  servicesOffered?: string[];
}

export interface TradeExchange {
  id: string;
  timestamp: string;
  lenderCompany: string;
  borrowerCompany: string;
  resourceRole: string;
  quantity: number;
  durationDays: number;
  creditsExchanged: number;
  status: 'proposed' | 'pending_approval' | 'active' | 'completed' | 'disputed';
  aiConfidence: number;
  reasoning: string;
  isDemoTrade?: boolean;
}

export interface ProspectSignal {
  type: 'funding' | 'leadership_change' | 'hiring_spree' | 'tech_discussion' | 'product_launch';
  source: string;
  headline: string;
  summary: string;
  severity: number; // 1-10
  timestamp: string;
}

export interface OutreachMessage {
  id: string;
  sequenceNumber: number;
  channel: 'email' | 'linkedin' | 'call_script';
  subject: string;
  content: string;
  personalizationHook: string;
  status: 'draft' | 'pending_review' | 'approved' | 'sent' | 'opened' | 'replied';
  sentAt?: string;
}

export interface Prospect {
  id: string;
  companyName: string;
  domain: string;
  industry: string;
  sizeRange: string;
  location: string;
  fitScore: number; // 0-100
  status: 'new' | 'researched' | 'awaiting_approval' | 'outreach_active' | 'meeting_booked' | 'closed_won';
  signals: ProspectSignal[];
  techStack: string[];
  painPoints: string[];
  keyPeople: { name: string; title: string; linkedin?: string }[];
  outreachSequence: OutreachMessage[];
  lastContactAt?: string;
}

export interface McpTool {
  name: string;
  description: string;
  server: string;
  parametersSchema: Record<string, any>;
  samplePayload: Record<string, any>;
}

export interface McpServer {
  id: string;
  name: string;
  description: string;
  port: number;
  endpoint: string;
  status: 'healthy' | 'degraded' | 'offline';
  toolsCount: number;
  tools: McpTool[];
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: string;
  entityType: string;
  entityId: string;
  actor: string;
  previousHash: string;
  hash: string;
  status: 'verified' | 'tampered';
}

export interface ComplianceDeadline {
  title: string;
  dueDate: string;
  authority: string;
  description: string;
  status: 'completed' | 'upcoming' | 'action_required';
  fee: number;
}

export interface WhatIfScenario {
  id: string;
  title: string;
  description: string;
  timeSavingsDays: number;
  costDeltaUSD: number;
  cognitiveImpact: string;
  confidenceScore: number;
  actionType: 'swarm' | 'pair' | 'descope' | 'trade' | 'resequence';
  targetTaskIds: string[];
}
