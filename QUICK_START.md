# Quick Start - Vue.js Frontend

## 1. Install Dependencies

```bash
cd vue-frontend
npm install
```

## 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and set your Directus URL:
```
VITE_DIRECTUS_URL=http://localhost:8055
```

## 3. Start Development Server

```bash
npm run dev
```

Open: http://localhost:5173

## 4. Build for Production

```bash
npm run build
```

## 5. Deploy to Cloudflare Pages

### Quick Deploy (GitHub)

1. Push to GitHub:
```bash
git add .
git commit -m "Vue.js frontend"
git push
```

2. Go to [Cloudflare Pages](https://dash.cloudflare.com)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure:
   - Build command: `npm run build`
   - Build output: `dist`
   - Root directory: `vue-frontend`
6. Add environment variable:
   - Name: `VITE_DIRECTUS_URL`
   - Value: `https://your-directus.com`
7. Click "Save and Deploy"

Done! Your site will be live at `https://your-project.pages.dev`

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
vue-frontend/
├── src/
│   ├── views/          # Page components
│   ├── components/     # Reusable components
│   ├── router/         # Vue Router config
│   ├── services/       # API service
│   └── assets/         # CSS and static files
├── public/             # Static assets
└── dist/               # Production build (generated)
```

## Need Help?

- See `README.md` for detailed documentation
- See `CLOUDFLARE_DEPLOYMENT.md` for deployment guide
- See `VUE_MIGRATION_GUIDE.md` for migration details
