# Alexander Böhm - My Website

Portfolio and business website for Alexander Böhm, built with Astro, TypeScript, and Svelte.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Svelte](https://svelte.dev)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Bun](https://bun.sh)** - Package manager and runtime
- **[Biome](https://biomejs.dev)** - Linting and formatting
- **[Vercel](https://vercel.com)** - Deployment platform

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) 1.x or later

### Installation

```bash
bun install
```

### Development

```bash
bun dev
```

Opens the development server at [localhost:4321](http://localhost:4321).

### Build

```bash
bun build
```

Runs type checking and builds the production site to `./dist/`.

### Preview

```bash
bun preview
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

Copy `.env.example` to `.env` and configure:

```bash
RESEND_API_KEY=                         # Resend API key for contact form
PUBLIC_VERCEL_PROJECT_PRODUCTION_URL=   # Production domain URL
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## License

All rights reserved.
