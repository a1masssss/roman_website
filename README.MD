# Roman's Personal Website

## Setup

```bash
cd frontend
npm install
npm run dev
```

## Deployment to Vercel

### Option 1: Using vercel.json (Already configured)
Just push to GitHub and connect your repository to Vercel. The `vercel.json` file will handle the configuration automatically.

### Option 2: Manual Vercel Dashboard Settings
If `vercel.json` doesn't work, configure these settings in Vercel Dashboard:

1. **Root Directory**: `frontend`
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

### Option 3: Deploy from frontend directory
```bash
cd frontend
vercel
```

The site will be deployed and accessible at your Vercel URL.