## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `je-portfolio`
2. Push this project to the `main` branch
3. In repo **Settings → Pages**, set source to **GitHub Actions**
4. On each push to `main`, the workflow builds and deploys `dist/`

Live URL: `https://<your-username>.github.io/je-portfolio/`

### Custom domain

To use a custom domain, set `base: '/'` in `vite.config.js` and configure DNS in your domain registrar.

## Project structure

- `src/data/resume.js` — all portfolio content (edit here to update the site)
- `src/components/` — section components
- `src/styles/` — global CSS and design tokens
