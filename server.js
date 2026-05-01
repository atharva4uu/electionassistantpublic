const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.ANTHROPIC_API_KEY;

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

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

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'ElectIQ Backend API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});