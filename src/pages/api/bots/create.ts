import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, strategy, chain, parameters } = req.body;

    if (!name || !strategy || !chain) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create bot logic here
    const bot = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      strategy,
      chain,
      status: 'inactive',
      createdAt: new Date(),
    };

    return res.status(201).json({
      success: true,
      bot: bot,
    });
  } catch (error) {
    console.error('Bot creation error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}