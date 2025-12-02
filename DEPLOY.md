# GitHub Pages Deployment Guide

The project is configured to deploy to GitHub Pages with a custom domain.

## Deploy Workflow

1. **Build and publish**
   ```bash
   npm run deploy
   ```
   This bundles the site with Vite and publishes `dist/` to the `gh-pages` branch via `gh-pages`.

2. **GitHub Pages settings**
   - Repository → Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain: `fathimarahmi.com`
   - Enable “Enforce HTTPS” once DNS is active

3. **Live URL**
   - Primary: `https://fathimarahmi.com`
   - Optional alias (if configured): `https://www.fathimarahmi.com`

## Custom Domain Checklist

1. **CNAME file**
   - `public/CNAME` must contain the desired hostname.
   - Example:
     ```
     fathimarahmi.com
     ```
     Replace with a different hostname if you ever want to point the site elsewhere.

2. **DNS records**
   Add these in your domain registrar’s DNS dashboard (replace values if using another GitHub account or hostname):

   | Type | Host/Name | Value/Target             | TTL  | Purpose                         |
   | ---- | --------- | ------------------------ | ---- | -------------------------------- |
   | A    | `@`       | `185.199.108.153`        | 300s | Apex → GitHub Pages              |
   | A    | `@`       | `185.199.109.153`        | 300s | Apex → GitHub Pages              |
   | A    | `@`       | `185.199.110.153`        | 300s | Apex → GitHub Pages              |
   | A    | `@`       | `185.199.111.153`        | 300s | Apex → GitHub Pages              |
   | CNAME| `www`     | `vaishnav-197.github.io` | 300s | `www` → GitHub Pages profile site|

   - If you only need the apex domain, you can omit the `www` CNAME.
   - For a different username, replace `vaishnav-197.github.io` with `USERNAME.github.io`.

3. **Propagation & verification**
   - Wait up to ~60 minutes for DNS to propagate.
   - Verify from a terminal:
     ```bash
     dig fathimarahmi.com +noall +answer
     dig www.fathimarahmi.com +noall +answer
     ```

## Vite Base Path

- `vite.config.js` sets `base: '/'` so assets resolve correctly on the custom domain.
- No further path adjustments are needed.

## Local Development

```bash
npm run dev
```

Site runs at `http://localhost:5173`.

## Production Preview

```bash
npm run build
npm run preview
```

Serves the optimized bundle locally for spot checks.

