# Deployment Guide - ElectIQ

## Quick Deploy to Vercel (Recommended)

### Option 1: One-Click Deploy with Vercel

1. **Go to Vercel**: https://vercel.com/new
2. **Import Git Repository**: Click "Import Git Repository"
3. **Connect GitHub**: 
   - Click "Continue with GitHub"
   - Select `atharva4uu/electionassistantpublic`
4. **Configure Project**:
   - Leave all settings default
   - Skip "Framework Preset"
5. **Add Environment Variable**:
   - Click "Environment Variables"
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Paste your Anthropic API key from https://console.anthropic.com/
   - Click "Add"
6. **Deploy**: Click "Deploy"

**That's it!** Your site will be live at `https://[project-name].vercel.app`

---

### Option 2: Manual Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd electionassistantpublic

# Login to Vercel
vercel login

# Deploy
vercel --prod

# When prompted, add environment variable:
# ANTHROPIC_API_KEY = your-api-key
```

---

## Alternative: Deploy to Render.com

1. **Go to Render**: https://render.com
2. **New Web Service**: Click "New +" → "Web Service"
3. **Connect Repository**: Select `atharva4uu/electionassistantpublic`
4. **Configure**:
   - **Name**: `electiq-backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. **Environment Variable**:
   - **Name**: `ANTHROPIC_API_KEY`
   - **Value**: Your API key
   - Click "Add"
6. **Deploy**: Click "Create Web Service"

After deployment, update the backend URL in `index.html` to your Render service URL.

---

## Local Development

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your API key to .env
# ANTHROPIC_API_KEY=your_key_here

# Run server
npm start

# Open browser to http://localhost:3000
```

---

## Environment Variables

Your hosting service needs one environment variable:

| Variable | Value |
|----------|-------|
| `ANTHROPIC_API_KEY` | Your API key from [Anthropic Console](https://console.anthropic.com/) |

---

## Getting Your Anthropic API Key

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Click "API Keys" in the left sidebar
4. Click "Create Key"
5. Copy the key and save it safely
6. Use it for the deployment

---

## Troubleshooting

**API Error "Connection error"?**
- Verify your `ANTHROPIC_API_KEY` is set in environment variables
- Check the API key is valid at https://console.anthropic.com/

**404 on `/api/chat`?**
- Make sure backend is deployed
- Check correct deployment URL in frontend

**CORS Error?**
- Browser security blocks direct API calls
- Backend proxy handles this automatically

---

## File Structure

```
electionassistantpublic/
├── index.html           # Frontend (GitHub Pages)
├── api/
│   └── chat.js         # Vercel serverless function
├── server.js           # Express server (for local/Render)
├── package.json        # Node dependencies
├── vercel.json         # Vercel configuration
├── render.yaml         # Render configuration
├── .env.example        # Environment template
└── README.md           # Project documentation
```

---

## Live Links

After deployment:
- **Frontend**: https://atharva4uu.github.io/electionassistantpublic/
- **Backend**: Check your deployment platform's dashboard

---

## Support

For issues:
1. Check environment variables are set
2. Verify API key is valid
3. Look at deployment logs
4. Test API endpoint directly with curl/Postman
