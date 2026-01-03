# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

Single-page portfolio/business website for Alexander Böhm (ITS Böhm) built with Astro, TypeScript, and Svelte. Deployed to Vercel.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Components**: Astro + Svelte 5.x for interactive features
- **Language**: TypeScript (strict mode)
- **Package Manager**: Bun
- **Linting/Formatting**: Biome
- **Deployment**: Vercel (static output)
- **Email**: Resend API for contact form

## Commands

```bash
bun dev        # Start development server (localhost:4321)
bun build      # Type check and build for production
bun check      # Run TypeScript checking only
bun preview    # Preview production build locally
```

## Project Structure

```txt
src/
├── pages/           # Route pages (index.astro, api/, de/)
├── components/      # UI components (.astro, .svelte)
├── layouts/         # Page layouts
├── data/            # Content data with EN/DE variants
├── types/           # TypeScript types and Zod schemas
├── utils/           # Utilities (i18n, routes, etc.)
├── styles/          # Global CSS and reset
└── images/          # Image assets
public/              # Static assets served as-is
```

## Internationalization (i18n)

- **Languages**: English (default), German
- **Routing**: No prefix for EN (`/`), `/de/` prefix for German
- **Implementation**: Custom `useTranslations()` in `src/utils/i18n.ts`
- **Data files**: Suffixed with `...DataEN` and `...DataDE`

Example:

```typescript
const t = useTranslations(ui, lang);
t("key")           // Simple lookup
t("nested.key")    // Dot notation for nested objects
t("key", { name }) // Interpolation with {placeholder}
```

## Code Style

- **Indentation**: Tabs (width 2)
- **Quotes**: Single quotes
- **Line width**: 120 characters
- **Path aliases**: `@/*` maps to `./src/*`

Run `bun check` before committing to catch type errors.

## Key Patterns

- Astro components (`.astro`) for static/server-rendered content
- Svelte components (`.svelte`) for interactive features (forms, animations)
- Zod schemas for form validation (`src/types/contact-form.ts`)
- CSS custom properties for theming (`src/styles/global.css`)

## Environment Variables

Required for contact form functionality:

- `RESEND_API_KEY` - Resend email service API key
- `PUBLIC_VERCEL_PROJECT_PRODUCTION_URL` - Production domain
