# Alexander Böhm - My Website

Portfolio and business website for Alexander Böhm, built with Astro, TypeScript, and Svelte.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Svelte](https://svelte.dev)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[pnpm](https://pnpm.io)** - Package manager
- **[Biome](https://biomejs.dev)** - Linting and formatting
- **[Vercel](https://vercel.com)** - Deployment platform

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 24 (see `.nvmrc`)
- [pnpm](https://pnpm.io) 12 (the exact version is pinned in `package.json` under `packageManager`)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Opens the development server at [localhost:4321](http://localhost:4321).

### Build

```bash
pnpm build
```

Runs type checking and builds the production site to `./dist/`.

### Preview

```bash
pnpm preview
```

Preview the production build locally before deploying.

## Project Structure

```txt
src/
├── pages/           # Route pages and API endpoints
│   ├── api/         # Server endpoints (contact form)
│   └── de/          # German locale pages
├── components/      # UI components (.astro, .svelte)
├── layouts/         # Page layouts
├── data/            # Content data (EN/DE variants)
├── types/           # TypeScript types and Zod schemas
├── utils/           # Utilities (i18n, routes, etc.)
├── styles/          # Global CSS
└── images/          # Image assets
public/              # Static assets
```

## Features

- Bilingual support (English and German)
- Contact form with email integration via Resend
- Responsive design
- Optimized images (WebP)
- SEO-friendly with sitemap generation

## Environment Variables

The variables are managed in the Vercel project. Link the repository once and pull the development values into `.env.local`:

```bash
vercel link
vercel env pull .env.local --environment=development
```

`vercel env pull` overwrites `.env.local` on every run. Put personal local overrides in `.env.development.local` instead.

Without access to the Vercel project, copy `.env.example` to `.env.local` and fill in the values:

```bash
RESEND_API_KEY=                         # Resend API key for contact form
PUBLIC_VERCEL_PROJECT_PRODUCTION_URL=   # Production domain URL
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

All rights reserved.
