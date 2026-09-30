import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const nodeEnv = process.env.NODE_ENV ?? 'development';
const env = loadEnv(nodeEnv, process.cwd(), '');

/** @see {@link https://astro.build/config} */
export default defineConfig({
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	base: '/',
	// Astro 7 defaults to 'jsx', which drops whitespace between inline elements the templates rely on.
	compressHTML: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['de', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		icon(),
		svelte(),
		sitemap({
			i18n: {
				defaultLocale: 'en',
				// Same hreflang codes as the alternate links in Head.astro.
				locales: {
					de: 'de',
					en: 'en',
				},
			},
		}),
	],
	output: 'static',
	prefetch: { prefetchAll: true },
	site:
		(nodeEnv === 'production' ? 'https://' : 'http://') + env.PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
	// One URL per page: Vercel redirects `/imprint/` to `/imprint`, and the sitemap and canonical URLs match.
	trailingSlash: 'never',
});
