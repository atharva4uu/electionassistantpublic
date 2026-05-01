# ElectIQ — Election Process Assistant

A modern, interactive web-based assistant for understanding the democratic election process, voter rights, and voting procedures.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatharva4uu%2Felectionassistantpublic&env=ANTHROPIC_API_KEY&envDescription=Get%20your%20API%20key%20from%20https%3A%2F%2Fconsole.anthropic.com&project-name=electiq)

## Features

- 💬 AI-powered chat assistant (non-partisan election education)
- 📅 Interactive timeline of election phases
- 📋 Step-by-step voting guide
- 🎯 Quick topic buttons for common questions
- 🎨 Modern, accessible UI design

## Deployed Links

- **Website**: https://atharva4uu.github.io/electionassistantpublic/
- **Repository**: https://github.com/atharva4uu/electionassistantpublic

## Deployment Instructions

### ⚡ Quick Deploy (Recommended)

Deploy to Vercel in 3 steps:

1. Go to https://vercel.com/new
2. Import `atharva4uu/electionassistantpublic` 
3. Add environment variable `ANTHROPIC_API_KEY` = your API key from [Anthropic Console](https://console.anthropic.com/)

**Done!** Your site is live.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions and alternatives (Render, local development).

### Frontend & Backend Deployment Status

- **Frontend** (GitHub Pages): ✅ Auto-deployed from `main` branch
- **Backend** (Serverless API): 📋 Requires one-time setup (see above)

## Local Development

### Requirements
- Node.js 18+
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/atharva4uu/electionassistantpublic.git
cd electionassistantpublic
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
# Add your ANTHROPIC_API_KEY
```

4. Run the server:
```bash
npm start
# Server runs on http://localhost:3000
```

5. Open `index.html` in your browser

## API Endpoint

**POST** `/api/chat`

Request body:
```json
{
  "messages": [
    { "role": "user", "content": "Your question" }
  ]
}
```

Response:
```json
{
  "content": [
    { "type": "text", "text": "AI response" }
  ]
}
```

## Architecture

- **Frontend**: Static HTML/CSS/JS (GitHub Pages)
- **Backend**: Node.js + Express (Render.com)
- **AI**: Anthropic Claude API

## License

MIT