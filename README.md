# Flipping de muebles

A brochure site for an Argentine furniture-restoration business, built with Next.js (App Router) and Tailwind CSS v4, statically exported and deployed to GitHub Pages on the apex custom domain flipmimueble.com.

## Getting started

This project uses Yarn (Berry) exclusively — do not use npm, pnpm, or bun.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Building for production

```bash
yarn build
```

This produces a static export in `./out` (configured via `output: 'export'` in `next.config.ts`), since `next start` is not supported for a statically exported app. To preview the exported output locally:

```bash
yarn start
```

## Deployment

Deployment is automated via `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages on every push to `main` (or via manual `workflow_dispatch`). `public/CNAME` pins the custom apex domain flipmimueble.com.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
