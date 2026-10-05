import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: 'STRIPE_SECRET_KEY not configured' });
  }

  try {
    const stripe = new Stripe(secretKey);

    const body = req.body || {};
    const companyName = body.companyName || 'Enterprise Client';
    const dealValueUSD = Number(body.dealValueUSD) || 3000;
    const packageTier = body.packageTier || 'Standard ESA';
    const dealId = body.dealId || `deal_${Date.now()}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(dealValueUSD * 100),
            product_data: {
              name: `FlowForge Enterprise Stability Assessment — ${companyName}`,
              description: `48-hour ESA (${packageTier})`
            }
          },
          quantity: 1
        }
      ],
      success_url: `https://flowforge.fit/?payment=success&deal=${encodeURIComponent(dealId)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://flowforge.fit/?payment=cancelled&deal=${encodeURIComponent(dealId)}`,
      metadata: {
        dealId,
        companyName,
        packageTier,
        source: 'flowforge.fit'
      }
    });

    return res.status(200).json({
      url: session.url,
      sessionId: session.id
    });
  } catch (err: any) {
    console.error('[Stripe Error]', err.message);
    return res.status(500).json({
      error: 'Stripe session creation failed',
      detail: err.message
    });
  }
}
