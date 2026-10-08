# Acie Agsalud — Portfolio

Next.js static site, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Edit content
Everything on the page comes from `data/content.ts`. Update text there; the components read from it.

- GitHub link: set `profile.github`. The icon appears once `YOUR-USERNAME` is replaced.
- Resume: add `public/resume.pdf`.
- Projects: replace the example and set `showProjectsExampleNote` to `false`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static output in ./out
```

## Deploy
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes to Pages.
The repo must be public for GitHub Pages to be free.
