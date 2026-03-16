# Cloudflare Pages Deployment Guide

## Quick Deploy Steps

### 1. Prepare Your Repository

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Vue.js frontend"

# Push to GitHub
git remote add origin https://github.com/yourusername/ways-trafikkskole.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Pages** in the sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your repository: `ways-trafikkskole`
6. Configure build settings:

```
Framework preset: Vue
Build command: npm run build
Build output directory: dist
Root directory: vue-frontend
```

### 3. Environment Variables

Add in Cloudflare Pages → Settings → Environment variables:

**Production:**
```
VITE_DIRECTUS_URL=https://your-directus-instance.com
```

**Preview (optional):**
```
VITE_DIRECTUS_URL=https://staging-directus.com
```

### 4. Deploy

Click **Save and Deploy**

Your site will be available at: `https://ways-trafikkskole.pages.dev`

## Custom Domain Setup

### 1. Add Custom Domain

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain: `www.ways.no`
5. Follow DNS configuration instructions

### 2. DNS Configuration

Add these records in Cloudflare DNS:

```
Type: CNAME
Name: www
Content: ways-trafikkskole.pages.dev
Proxy: Enabled (orange cloud)
```

```
Type: CNAME  
Name: @
Content: ways-trafikkskole.pages.dev
Proxy: Enabled (orange cloud)
```

## Directus CORS Configuration

Update your Directus `.env` file:

```env
CORS_ENABLED=true
CORS_ORIGIN=https://ways.no,https://www.ways.no,https://ways-trafikkskole.pages.dev
CORS_METHODS=GET,POST,PATCH,DELETE
CORS_ALLOWED_HEADERS=Content-Type,Authorization
```

Restart Directus after changes:
```bash
cd Backend
docker-compose restart
```

## Automatic Deployments

Cloudflare Pages automatically deploys when you push to GitHub:

- **Production:** Pushes to `main` branch
- **Preview:** Pull requests and other branches

## Build Optimization

### Enable Build Cache

Cloudflare Pages automatically caches `node_modules` between builds.

### Reduce Build Time

Add to `package.json`:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

## Monitoring

### View Build Logs

1. Go to Cloudflare Pages dashboard
2. Click on your project
3. Click on a deployment
4. View build logs

### Analytics

Enable Web Analytics in Cloudflare:
1. Go to **Analytics** → **Web Analytics**
2. Add your site
3. Copy the tracking code (optional, Cloudflare auto-tracks)

## Troubleshooting

### Build Fails

**Check Node version:**
```json
// package.json
{
  "engines": {
    "node": "18.x"
  }
}
```

**Clear build cache:**
- Go to Settings → Builds
- Click "Clear build cache"
- Retry deployment

### 404 on Routes

Ensure `public/_redirects` exists:
```
/* /index.html 200
```

### API Not Working

1. Check environment variable is set correctly
2. Verify Directus CORS settings
3. Check browser console for errors
4. Test API directly: `https://your-directus.com/items/klasser`

### Images Not Loading

1. Verify Directus is accessible publicly
2. Check image URLs in browser console
3. Ensure Directus assets are publicly accessible

## Performance Tips

### 1. Enable Cloudflare CDN

Already enabled by default with orange cloud DNS.

### 2. Enable Auto Minify

1. Go to **Speed** → **Optimization**
2. Enable Auto Minify for JavaScript, CSS, HTML

### 3. Enable Brotli Compression

Enabled by default on Cloudflare.

### 4. Use Cloudflare Images (Optional)

For better image optimization:
1. Upload images to Cloudflare Images
2. Use Cloudflare Images URLs instead of Directus

## Security

### 1. Enable HTTPS

Automatic with Cloudflare Pages.

### 2. Security Headers

Add `public/_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

### 3. Rate Limiting

Configure in Cloudflare dashboard:
1. Go to **Security** → **WAF**
2. Create rate limiting rules

## Rollback

To rollback to a previous deployment:
1. Go to Cloudflare Pages dashboard
2. Click on your project
3. Find the previous successful deployment
4. Click **Rollback to this deployment**

## Cost

Cloudflare Pages is **FREE** for:
- Unlimited sites
- Unlimited requests
- Unlimited bandwidth
- 500 builds per month

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [Vue.js Docs](https://vuejs.org/)
