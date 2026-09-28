# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page portfolio/business website for Alexander Böhm (ITS Böhm), bilingual (EN/DE). Astro 7 + Svelte 5 + TypeScript 6 (strict), pnpm 12 as package manager, Biome for lint/format, deployed to Vercel (auto-deploy on merge to `main`).

## Commands

```bash
pnpm dev      # Dev server on localhost:4321
pnpm check    # astro check (type checking only)
pnpm cve      # cve-lite: scan pnpm-lock.yaml against OSV, fails on high/critical, audits overrides
pnpm lint     # biome lint --write (applies fixes)
pnpm format   # biome format --write
pnpm build    # astro check + astro build (output in dist/)
pnpm preview  # Serve the production build locally
```

There is no test suite. CI (`.github/workflows/check.yml`, Node version from `.nvmrc`) runs `cve`, `check`, `lint` and `build` on every push and PR. Run the same locally before committing. `cve-lite` only reports advisories known to OSV and the npm registry; Snyk's PR check uses its own database and can report more. Snyk findings without a fixed version are ignored in `.snyk`, each with a reason and an expiry date. Review them again when they expire.

`pnpm cve` also runs as a `pre-push` hook through lefthook (`lefthook.yml`). `pnpm install` installs the hook, because lefthook's postinstall is approved in `allowBuilds`. lefthook only writes the hooks listed in `lefthook.yml` to `.git/hooks`, where GitButler keeps its own `pre-commit` and `post-checkout` hooks. Do not add `pre-commit` to lefthook, and do not switch to a tool that sets `core.hooksPath` (e.g. husky), since either would disable GitButler's hooks. `but push` and `but pr new` run the hook. Skip it with `--no-hooks` or `LEFTHOOK=0`.

### Dependencies

- The pnpm version is pinned in `package.json` (`packageManager`). Vercel natively supports pnpm only up to v10. The Vercel project therefore sets `ENABLE_EXPERIMENTAL_COREPACK=1` (production and preview) to install exactly this version. `vercel.json` also pins the install and build commands to pnpm, because Vercel cannot parse pnpm 11+ lockfiles, which contain two YAML documents, and would otherwise fall back to `bun install`. pnpm-specific settings go in `pnpm-workspace.yaml`, since pnpm 11+ ignores the `pnpm` field in `package.json` and non-auth settings in `.npmrc`.
- pnpm does not hoist transitive packages, so every package imported from `src/` or `astro.config.ts` must be declared in `package.json`. Examples are `vite` (for `loadEnv`), `nanoid` and `sharp`, which Astro's image service needs. Keep `vite` on the major version Astro depends on, so only one Vite copy is installed.
- `pnpm-workspace.yaml` also trims unused transitive dependencies. `packageExtensions` marks the `nuxt` peer of `@vercel/analytics` as optional, which removes the whole Nuxt tree, and an override drops the unused `ajv` from `@vercel/routing-utils`. After changing these, delete `node_modules` and `pnpm-lock.yaml` and reinstall, because pnpm otherwise keeps the old resolutions.
- Dependency build scripts are blocked unless approved under `allowBuilds` in `pnpm-workspace.yaml`. An unapproved build script fails the install with `ERR_PNPM_IGNORED_BUILDS`.
- Dependencies use caret ranges. Renovate (`rangeStrategy: bump`) raises the lower bounds, and new versions only resolve after pnpm's one-day `minimumReleaseAge`.
- TypeScript stays on 6.x until `@astrojs/check` and `@astrojs/svelte` accept TypeScript 7 as a peer dependency.

## Architecture

### Rendering

`astro.config.ts` sets `output: 'static'` with the Vercel adapter. Everything is prerendered except `src/pages/api/contact.ts`, which opts out via `export const prerender = false` and runs as a Vercel function. `site` is built from `PUBLIC_VERCEL_PROJECT_PRODUCTION_URL` (loaded with Vite's `loadEnv`), so sitemap and absolute URLs depend on it.

The home page is a stack of section components (`Hero`, `About`, `Services`, `Stats`, `Testimonials`, `ContactSection`, `Footer`) inside `MainLayout`. `src/pages/index.astro` and `src/pages/de/index.astro` compose the same sections separately, so adding or reordering a section means editing both.

`Head.astro` enables Astro's `<ClientRouter />`, so internal links swap the page content instead of reloading. Two rules follow from that:

- **Component scripts:** do their DOM setup inside `document.addEventListener('astro:page-load', …)`. Bundled scripts run only once, and elements queried at module level are gone after the first swap. Register `window` listeners once at module level, and look up elements inside the handler.
- **Section links on the home page:** must be plain `#section` anchors. The German home page is served at `/de/`, so a link to `/de#section` counts as a different path and triggers a full swap instead of scrolling. Compare paths without the trailing slash.

### Internationalization

English is the default locale without a URL prefix; German lives under `/de/`. Key conventions:

- **Locale detection**: there is no prop drilling of `lang` between Astro components. Each `.astro` component derives it itself with `Astro.url.pathname.split('/')[1] === 'de' ? 'de' : 'en'`. Svelte islands cannot read the URL at render time, so they receive `lang` as a prop.
- **UI strings**: each component defines a local `ui = { en: {...}, de: {...} }` object and calls `useTranslations(ui, lang)` from `src/utils/i18n.ts`. Keys are type-checked via dot notation (nesting is typed up to 4 levels), missing keys fall back to `en`, then to the key itself, and `{placeholder}` interpolation is supported.
- **List content** (services, stats, testimonials, contact details, social links): lives in `src/data/*.ts` as paired `xxxDataEN` / `xxxDataDE` exports, typed by Zod-inferred types in `src/types/`. Components choose the array by `lang`.
- **Localized slugs**: legal pages have different slugs per locale (`/imprint` ↔ `/de/impressum`, `/privacy` ↔ `/de/datenschutz`). These mappings live in `src/utils/routes.ts`. Use `getLocalizedRoute` / `getAbsoluteLocalizedRoute` for internal links, and register any new page there. `astro:i18n` helpers like `getAbsoluteLocaleUrl` do not know about these slugs. Legal page content is written directly in each locale's page file, not in `ui` objects.
- **Auto-redirect**: an inline script in `src/layouts/MainLayout.astro` redirects on the client. An explicit choice in `localStorage['preferred-language']`, which `LanguageSelector.astro` writes when the user switches language, sends every page to its counterpart from `getLocalizedPath`. Without a stored choice, only the English home page redirects to `/de`, and only when `navigator.language` is German. Do not add other browser-language redirects: crawlers render with an English locale and empty storage, so they would never reach the German pages. The key string is repeated in both scripts (and in `src/utils/storage.ts`), so keep them in sync.

### Contact form

`ContactForm.svelte` (hydrated with `client:load`) posts `FormData` to `/api/contact`. The endpoint validates it with the shared Zod schema in `src/types/contact-form.ts` and sends mail through Resend. The sender and recipient addresses are hardcoded in the endpoint. Requires `RESEND_API_KEY`.

### Environment variables

Local values come from the Vercel project's development environment: `vercel env pull .env.local --environment=development`, with the repo linked through `vercel link`. The pull overwrites `.env.local` completely, so local overrides belong in `.env.development.local`. There is no `.env`, and `.env.example` lists the required keys.

### Styling

Global design tokens are CSS custom properties in `src/styles/global.css` (`--primary`, `--background`, layout widths, transition durations). Components use scoped `<style>` blocks with native CSS nesting.

## Code Style

Biome enforces tabs, single quotes, a 120-character line width and semicolons. In `.astro` and `.svelte` files Biome relaxes `useConst`, `useImportType` and the unused-variable/import rules, because template usage is invisible to it. Import from `src/` with the `@/` alias. Commit messages use conventional prefixes (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
