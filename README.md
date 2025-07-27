# AI Chat Widget - Production Ready

Always-on AI customer service chat widget for business websites.

## Features
- 24/7 customer support chatbot
- Knowledge base integration for business-specific responses
- Embeddable widget for any website
- PostgreSQL database for conversation storage
- Always-on hosting via Railway

## Quick Deploy
This project is configured for Railway deployment:

1. Connect your GitHub repository to Railway
2. Add environment variables:
   - `NODE_ENV=production`
   - `OPENAI_API_KEY=[your key]`
   - `DATABASE_URL=[your database url]`
3. Deploy automatically

## Widget Integration
Add this code to any webpage:

```html
<iframe 
  src="https://your-railway-url.railway.app/widget" 
  width="400" 
  height="600"
  style="border: none; position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: transparent;"
  title="AI Chat Widget">
</iframe>
```

## Local Development
```bash
npm install
npm run dev
```

Visit `http://localhost:5000/widget` to test the widget locally.