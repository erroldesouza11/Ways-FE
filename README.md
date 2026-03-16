# Ways Trafikkskole - Vue.js Frontend

Modern Vue.js single-page application for Ways Trafikkskole, optimized for Cloudflare Pages deployment.

## Features

- ✅ Vue 3 with Composition API
- ✅ Vue Router for navigation
- ✅ Axios for API calls
- ✅ Vite for fast development and building
- ✅ Responsive design
- ✅ Cloudflare Pages ready
- ✅ Environment variable support

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd vue-frontend
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your Directus URL:
```
VITE_DIRECTUS_URL=http://localhost:8055
```

4. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Deploying to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to Cloudflare Pages dashboard
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `vue-frontend`
6. Add environment variable:
   - **Variable name:** `VITE_DIRECTUS_URL`
   - **Value:** Your production Directus URL (e.g., `https://your-directus.com`)
7. Click "Save and Deploy"

### Method 2: Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build the project:
```bash
npm run build
```

4. Deploy:
```bash
wrangler pages deploy dist --project-name=ways-trafikkskole
```

### Method 3: Direct Upload

1. Build the project:
```bash
npm run build
```

2. Go to Cloudflare Pages dashboard
3. Click "Create a project" → "Upload assets"
4. Upload the `dist` folder
5. Configure environment variables in the dashboard

## Environment Variables

### Development
Create a `.env` file:
```
VITE_DIRECTUS_URL=http://localhost:8055
```

### Production (Cloudflare Pages)
Add in Cloudflare Pages dashboard under Settings → Environment variables:
```
VITE_DIRECTUS_URL=https://your-production-directus.com
```

## Project Structure

```
vue-frontend/
├── public/
│   └── _redirects          # Cloudflare Pages SPA routing
├── src/
│   ├── assets/
│   │   └── styles.css      # Global styles
│   ├── components/
│   │   ├── Navbar.vue      # Navigation component
│   │   └── Footer.vue      # Footer component
│   ├── views/
│   │   ├── Home.vue        # Home page
│   │   ├── Klasser.vue     # Classes page
│   │   ├── Priser.vue      # Pricing page
│   │   ├── Ansatte.vue     # Staff page
│   │   └── Kontakt.vue     # Contact page
│   ├── router/
│   │   └── index.js        # Vue Router configuration
│   ├── services/
│   │   └── api.js          # Directus API service
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## API Integration

The app connects to Directus CMS for dynamic content:

- **Employees:** `/items/ansatte`
- **Classes:** `/items/klasser`
- **Pricing:** `/items/priser`
- **Contact:** `/items/kontakt`

## Customization

### Styling
Edit `src/assets/styles.css` to customize colors, fonts, and layout.

### Components
All Vue components are in `src/components/` and `src/views/`.

### API Configuration
Modify `src/services/api.js` to change API endpoints or add new methods.

## Troubleshooting

### CORS Issues
If you encounter CORS errors:
1. Ensure Directus has CORS enabled
2. Add your Cloudflare Pages URL to Directus CORS origins
3. Check Directus `.env` file:
```
CORS_ENABLED=true
CORS_ORIGIN=https://your-site.pages.dev
```

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Update dependencies: `npm update`

### Routing Issues on Cloudflare Pages
Ensure `public/_redirects` file exists with:
```
/* /index.html 200
```

## Performance

- Vite provides fast HMR (Hot Module Replacement)
- Optimized production builds with code splitting
- Lazy loading for routes
- Image optimization through Directus

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Ways Trafikkskole. All rights reserved.
"# Ways-FE" 
"# Ways-FE" 
