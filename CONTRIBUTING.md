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

This project uses [Biome](https://biomejs.dev) for linting and formatting.

- **Indentation**: Tabs (width 2)
- **Quotes**: Single quotes
- **Line width**: 120 characters
- **Semicolons**: Required

Run `pnpm check` before committing to catch type errors.

## Project Conventions

### Components

- **Astro components** (`.astro`) - Static/server-rendered content
- **Svelte components** (`.svelte`) - Interactive features (forms, animations, carousels)

### File Naming

- Components: `PascalCase.astro` or `PascalCase.svelte`
- Utilities: `camelCase.ts`
- Data files: `camelCase.ts` with `...DataEN` / `...DataDE` exports

### Path Aliases

Use `@/` to reference the `src/` directory:

```typescript
import { useTranslations } from '@/utils/i18n';
import type { Service } from '@/types/services';
```

## Internationalization

The site supports English (default) and German.

### Adding Translations

1. Define translations in the component or in `src/data/`:

   ```typescript
   const ui = {
     en: { greeting: "Hello" },
     de: { greeting: "Hallo" }
   };
   ```

2. Use the translation helper:

   ```typescript
   import { useTranslations } from '@/utils/i18n';

   const t = useTranslations(ui, lang);
   t("greeting"); // Returns "Hello" or "Hallo"
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
3. Run `pnpm cve`, `pnpm check` and `pnpm build` to verify
4. Submit a pull request

Pull requests are automatically reviewed by Claude Code.

## Deployment

The site deploys automatically to Vercel when changes are merged to `main`.

To preview a production build locally:

```bash
pnpm build && pnpm preview
```
