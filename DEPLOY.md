# GitHub Pages Deployment Guide

## Setup Complete! ✅

Your project is now configured for GitHub Pages deployment.

## How to Deploy

1. **Build and deploy:**
   ```bash
   npm run deploy
   ```

   This will:
   - Build your React app
   - Deploy it to the `gh-pages` branch
   - Make it available at: `https://vaishnav-197.github.io/FathimaRahmi_Portfolio/`

2. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Select source: "gh-pages" branch
   - Save

## Important Notes

- The base path is set to `/FathimaRahmi_Portfolio/` in `vite.config.js`
- All assets will be served from this base path
- The `gh-pages` branch will be created automatically on first deploy
- You can update the site by running `npm run deploy` again

## Local Development

For local development, use:
```bash
npm run dev
```

The app will run at `http://localhost:5173`

## Production Build

To test the production build locally:
```bash
npm run build
npm run preview
```

