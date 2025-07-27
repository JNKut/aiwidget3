# Railway Setup Checklist - What You Still Need to Do

## ✅ Already Done (You Have These)
- [x] Project code is ready
- [x] Railway configuration files created
- [x] Build and deploy scripts available
- [x] Clean project structure

## 🔄 What You Still Need to Do

### 1. Upload Code to GitHub (Required)
**Why:** Railway deploys from GitHub repositories

**Steps:**
1. Download your code from Replit (three dots → Download as zip)
2. Go to https://github.com and create new repository
3. Name it: `ai-chat-widget-production`
4. Make it Public (required for free Railway)
5. Upload ALL your project files to the repository
6. Commit changes

### 2. Get Your OpenAI API Key (Required)
**Why:** Your AI needs this to respond to customers

**Steps:**
1. Go to https://platform.openai.com
2. Sign in to your OpenAI account
3. Click "API Keys" in sidebar
4. Copy your existing key (starts with sk-)
5. If no key exists, create new one

### 3. Create Railway Account and Deploy
**Why:** This gives you always-on hosting

**Steps:**
1. Go to https://railway.app
2. Sign up with GitHub account
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway starts building automatically

### 4. Add Environment Variables in Railway
**Why:** Your app needs these to function

**Required Variables:**
- `NODE_ENV` = `production`
- `OPENAI_API_KEY` = [your OpenAI key]
- `DATABASE_URL` = `postgresql://neondb_owner:npg_UydFo23lSkHv@ep-square-boat-aec1lg3d.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require`

**How:** In Railway dashboard → Variables tab → Add each one

### 5. Wait for Deployment (5-10 minutes)
**What happens:** Railway builds your app automatically
**Check:** Deployments tab shows "Deployment successful"

### 6. Get Your Live URL
**Where:** Settings tab → Domains section
**Result:** URL like `https://your-app.railway.app`
**Your widget:** `https://your-app.railway.app/widget`

### 7. Test Your Widget
**Test URL:** Visit your widget URL directly
**Verify:** Chat opens and AI responds correctly

### 8. Add to Your Website
**Embed code:**
```html
<iframe 
  src="https://your-railway-url.railway.app/widget" 
  width="400" 
  height="600"
  style="border: none; position: fixed; bottom: 20px; right: 20px; z-index: 9999; background: transparent;"
  title="AI Chat Widget">
</iframe>
```

**Where:** Before closing `</body>` tag on your website

## 🚨 Most Important Steps
1. **Upload to GitHub** - Railway can't deploy without this
2. **Get OpenAI API key** - Widget won't work without this
3. **Add environment variables** - App will crash without these

## ⏱️ Time Required
- GitHub upload: 10 minutes
- Railway setup: 10 minutes
- Testing: 5 minutes
- **Total: 25 minutes**

## 🆘 If You Get Stuck
1. Check Railway build logs for specific errors
2. Verify all 3 environment variables are set correctly
3. Make sure your GitHub repository has all files
4. Ensure OpenAI API key has available credits

## 🎯 Final Result
- Always-on chat widget at professional URL
- No more sleep/downtime issues
- Automatic deployments when you update GitHub
- 24/7 customer support for your business