# Contributing

Guidelines for contributing to this project.

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

   This also installs a `pre-push` Git hook (via the [Vite+ hook dispatcher](https://viteplus.dev/guide/commit-hooks)) that runs `pnpm cve` before every push. The hook script is `.vite-hooks/pre-push`; skip it with `VP_GIT_HOOKS=0`.

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Run type checking:

   ```bash
   pnpm check
   ```

## Code Style

This project uses [Vite+](https://viteplus.dev) with Oxfmt for formatting and Oxlint for linting. Both are configured in `vite.config.ts` with the shared [`@mheob/oxfmt-config`](https://github.com/mheob/config/tree/main/packages/oxfmt-config) and [`@mheob/oxlint-config`](https://github.com/mheob/config/tree/main/packages/oxlint-config).

- **Indentation**: Tabs (width 2)
- **Quotes**: Single quotes
- **Line width**: 100 characters
- **Semicolons**: Required

Run `pnpm exec vp check` (format, lint and type check of `.ts` files) and `pnpm check` (`astro check`) before committing.

## Project Conventions

### Components

- **Astro components** (`.astro`) - Static content; small client behavior (e.g. the carousel) goes in a `<script>` block
- **Svelte components** (`.svelte`) - Interactive islands (contact form, contact links, count-up animation)

### File Naming

- Components: `PascalCase.astro` or `PascalCase.svelte`
- Utilities: `kebab-case.ts`
- Data files: `kebab-case.ts` with `...DataEN` / `...DataDE` exports

### Path Aliases

Use `@/` to reference the `src/` directory:

```typescript
import type { Service } from '@/types/services';
import { useTranslations } from '@/utils/i18n';
```

## Internationalization

The site supports English (default) and German.

### Adding Translations

1. Define the UI strings in the component:

   ```typescript
   const ui = {
   	en: { greeting: 'Hello' },
   	de: { greeting: 'Hallo' },
   };
   ```

2. Use the translation helper:

   ```typescript
   import { useTranslations } from '@/utils/i18n';

   const t = useTranslations(ui, lang);
   t('greeting'); // Returns "Hello" or "Hallo"
   ```

List content (services, stats, testimonials, contact details) goes in `src/data/` instead, as paired `...DataEN` / `...DataDE` exports.

### Routes

- English: `/`, `/imprint`, `/privacy`
- German: `/de/`, `/de/impressum`, `/de/datenschutz`

## Git Workflow

### Commit Messages

Use descriptive commit messages with conventional prefixes:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Formatting, styling
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks

### Pull Requests

1. Create a feature branch from `main`
2. Make your changes
3. Run `pnpm cve`, `pnpm exec vp check`, `pnpm check` and `pnpm build` to verify
4. Submit a pull request

Pull requests run the CI checks, plus checks from Snyk, SonarCloud and Socket and a Vercel preview deployment.

## Deployment

The site deploys automatically to Vercel when changes are merged to `main`.

To preview a production build locally:

```bash
pnpm build && pnpm preview
```
