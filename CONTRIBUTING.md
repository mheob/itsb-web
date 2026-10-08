# Contributing

Guidelines for contributing to this project.

## Development Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

   This also installs a `pre-push` Git hook (via [lefthook](https://lefthook.dev)) that runs `pnpm cve` before every push.

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

- **Astro components** (`.astro`) - Static/server-rendered content
- **Svelte components** (`.svelte`) - Interactive features (forms, animations, carousels)

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

1. Define translations in the component or in `src/data/`:

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

Pull requests are automatically reviewed by Claude Code.

## Deployment

The site deploys automatically to Vercel when changes are merged to `main`.

To preview a production build locally:

```bash
pnpm build && pnpm preview
```
