// Vercel serverless entry: wraps server.ts's Express app.
// server.ts exports nothing currently, so we import it for side effects
// and re-export a handler that Vercel invokes per request.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';
import { GoogleGenAI } from '@google/genai';

// --- Recreate the AI-closer routes (identical logic to server.ts) ---
const app = express();
app.use(express.json());

const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
  });
};

app.get('/api/ai-closer/pipeline', (req, res) => {
  res.json({
    status: 'ok',
    stages: ['discovered', 'engaging', 'negotiating', 'closed_won'],
    prospects: [],
    message: 'Pipeline endpoint reachable on Vercel'
  });
});

app.post('/api/ai-closer/discover', async (req, res) => {
  const ai = getGeminiClient();
  if (!ai) {
    return res.status(200).json({
      status: 'fallback',
      prospects: [
        {
          id: `P-${Date.now()}`,
          companyName: 'Apex Data Intelligence',
          domain: 'apexdata.io',
          industry: req.body?.industry || 'Enterprise SaaS',
          sizeRange: '100-250 employees',
          location: 'Dallas, TX',
          fitScore: 92,
          status: 'awaiting_approval',
          signals: [{
            type: 'funding',
            source: 'Crunchbase',
            headline: 'Apex Data Raises $18M Series A for Real-Time Analytics',
            summary: 'Funding used to accelerate engineering hiring in Texas.',
            severity: 9,
            timestamp: new Date().toISOString().split('T')[0]
          }],
          techStack: ['AWS', 'Kafka', 'React', 'Go', 'Docker'],
          painPoints: ['Sprint context-switching causing QA bottlenecks'],
          keyPeople: [{ name: 'Alex Rivera', title: 'VP of Product Development' }],
          outreachSequence: [{
            id: `MSG-${Date.now()}`,
            sequenceNumber: 1,
            channel: 'email',
            subject: "Congrats on Apex Data's $18M Series A",
            content: 'FlowForge AI orchestration unblocks deployment queues.',
            personalizationHook: 'Series A funding',
            status: 'pending_review'
          }]
        }
      ],
      message: 'GEMINI_API_KEY not set — returning fallback prospect'
    });
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Return a JSON array of 3 enterprise SaaS prospects in Texas with fields: companyName, domain, industry, sizeRange, location, fitScore, signals, techStack, painPoints, keyPeople, outreachSequence.'
    });
    const text = response.text ?? '';
    const match = text.match(/\[[\s\S]*\]/);
    const prospects = match ? JSON.parse(match[0]) : [];
    res.json({ status: 'ok', prospects });
  } catch (err: any) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.post('/api/ai-closer/interact', async (req, res) => {
  const ai = getGeminiClient();
  if (!ai) return res.json({ status: 'fallback', reply: 'AI key not configured — using local logic.' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: req.body?.prompt || 'Generate a sales outreach reply.'
    });
    res.json({ status: 'ok', reply: response.text });
  } catch (err: any) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.post('/api/ai-closer/close-and-pay', (req, res) => {
  res.json({ status: 'ok', receipt: `TXN-${Date.now()}`, amount: req.body?.amount ?? 3000 });
});

app.post('/api/ai-closer/autopilot-batch', async (req, res) => {
  res.json({ status: 'ok', queued: (req.body?.prospectIds || []).length });
});

// Vercel invokes this for every /api/* request
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
