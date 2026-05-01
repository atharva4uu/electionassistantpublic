# ElectIQ — Election Process Assistant

A modern, interactive web-based assistant for understanding the democratic election process, voter rights, and voting procedures.

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

### Frontend (GitHub Pages)
The frontend is automatically deployed via GitHub Pages from the `main` branch.

### Backend (Render.com)

1. Go to [Render.com](https://render.com)
2. Sign in with your GitHub account
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository: `atharva4uu/electionassistantpublic`
5. Configure the service:
   - **Name**: `electiq-backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
6. Add environment variable:
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: Your Anthropic API key from [api.anthropic.com](https://console.anthropic.com)
7. Click "Deploy"

Once deployed, update the backend URL in `index.html` (line with `https://electiq-backend.onrender.com/api/chat`) if your service name differs.

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