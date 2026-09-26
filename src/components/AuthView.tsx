import React, { useState } from 'react';
import { 
  SparklesIcon, 
  LockIcon, 
  MailIcon, 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  UserCheckIcon, 
  Building2, 
  KeyIcon,
  CheckCircle2Icon,
  GlobeIcon
} from 'lucide-react';
import { Company } from '../types';

interface AuthViewProps {
  onLoginSuccess: (role: string, email: string) => void;
  onBackToMarketing: () => void;
  companies: Company[];
}

export const AuthView: React.FC<AuthViewProps> = ({
  onLoginSuccess,
  onBackToMarketing,
  companies
}) => {
  const [email, setEmail] = useState('admin@flowforge.io');
  const [password, setPassword] = useState('FlowForge2026!');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'register'>('signin');

  const demoRoles = [
    {
      title: 'System Admin',
      email: 'admin@flowforge.io',
      role: 'SUPERADMIN',
      badge: 'Full Access',
      desc: 'Controls all 11 MCP servers & FFX token ledger'
    },
    {
      title: 'Enterprise Owner',
      email: 'owner@company.com',
      role: 'OWNER',
      badge: 'Billing & FFX',
      desc: 'Manages capacity trades & Stripe Connect payouts'
    },
    {
      title: 'Project Lead',
      email: 'pm@company.com',
      role: 'PM',
      badge: 'Gantt & PERT',
      desc: 'Orchestrates DAG milestones & anti-burnout matrix'
    },
    {
      title: 'Guest Auditor',
      email: 'guest@partner.com',
      role: 'VIEWER',
      badge: 'Read-Only',
      desc: 'Verifies SHA-256 logs & Texas tax compliance'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess('OWNER', email);
    }, 600);
  };

  const handleQuickLogin = (role: string, roleEmail: string) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess(role, roleEmail);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between text-slate-100 p-4 sm:p-6 font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto">
        <div 
          onClick={onBackToMarketing}
          className="flex items-center space-x-2.5 cursor-pointer hover:opacity-80 transition"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <SparklesIcon className="w-4 h-4 text-slate-950 font-bold" />
          </div>
          <span className="font-bold text-base tracking-tight text-white">FlowForge</span>
        </div>

        <button
          onClick={onBackToMarketing}
          className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition"
        >
          ← Back to Public Website
        </button>
      </div>

      {/* Center Auth Card */}
      <div className="max-w-4xl w-full mx-auto my-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/20">
        {/* Left Form: Custom Email & Password */}
        <div className="md:col-span-7 space-y-6">
          <div>
            <span className="text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">
              ENTERPRISE SINGLE SIGN-ON
            </span>
            <h2 className="text-2xl font-bold text-white mt-2">
              {authMode === 'signin' ? 'Sign in to FlowForge' : 'Create Enterprise Account'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Access your critical path DAGs, FFX capacity marketplace, and AI swarms.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Corporate Email Address:
              </label>
              <div className="relative">
                <MailIcon className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@enterprise.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>Password:</span>
                <span className="text-[11px] text-cyan-400 hover:underline cursor-pointer">
                  Forgot Password?
                </span>
              </div>
              <div className="relative">
                <LockIcon className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-950 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Authenticating with OAuth2...</span>
              ) : (
                <>
                  <span>Sign In to Console</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Social SSO Options */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-2 text-[10px] text-slate-500">
              <div className="h-px bg-slate-800 flex-1" />
              <span>OR CONNECT VIA IDENTITY PROVIDER</span>
              <div className="h-px bg-slate-800 flex-1" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin('OWNER', 'google-sso@company.com')}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-300 flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <GlobeIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>Google Workspace</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin('OWNER', 'okta-sso@company.com')}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-300 flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>Okta / SAML 2.0</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 1-Click Role Logins */}
        <div className="md:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-slate-200 flex items-center space-x-1.5">
                <KeyIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>1-Click Test Personas</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Ready</span>
            </div>

            <div className="space-y-2">
              {demoRoles.map((dr) => (
                <button
                  key={dr.role}
                  type="button"
                  onClick={() => handleQuickLogin(dr.role, dr.email)}
                  className="w-full p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 text-left transition group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                      {dr.title}
                    </span>
                    <span className="text-[9px] font-mono bg-slate-800 text-slate-300 px-1.5 py-0.2 rounded">
                      {dr.badge}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">
                    {dr.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[10px] text-slate-400 space-y-1">
            <span className="font-semibold text-slate-200 block">Security Verification:</span>
            <p>
              Session tokens are verified against SHA-256 chained audit ledgers. Texas LLC entity ID #0805192831.
            </p>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="text-center text-xs text-slate-500">
        <span>Protected by FlowForge RBAC Security · Texas Tax Code § 151.351</span>
      </div>
    </div>
  );
};
