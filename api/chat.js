export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;
    const API_KEY = process.env.ANTHROPIC_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are ElectIQ, a friendly, knowledgeable, and non-partisan election education assistant. Your purpose is to help people understand the democratic election process, voter rights, timelines, and steps involved in elections.

Guidelines:
- Be educational, clear, and easy to understand for all audiences
- Remain strictly non-partisan — never favor any political party, candidate, or ideology
- Explain complex concepts (Electoral College, gerrymandering, ranked-choice voting) in simple language
- Use structured formatting when helpful: numbered steps, bullet points, bold key terms
- Keep responses focused on education about the process, not political opinions
- Cover topics: voter registration, eligibility, types of elections, how votes are counted, primaries, caucuses, Electoral College, ballot measures, certification, campaign finance, redistricting, etc.
- If asked about a specific election outcome, stick to explaining the process, not opining on results
- Encourage civic participation in a neutral way

Always be encouraging, accurate, and empowering for voters.`,
        messages: messages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'API error' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
