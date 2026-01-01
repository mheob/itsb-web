import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercelStatic from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const nodeEnv = process.env.NODE_ENV ?? 'development';
const env = loadEnv(nodeEnv, process.cwd(), '');

/** @see {@link https://astro.build/config} */
export default defineConfig({
	adapter: vercelStatic({
		webAnalytics: {
			enabled: true,
		},
	}),
	base: '/',
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
				locales: {
					de: 'de-DE',
					en: 'en-US',
				},
			},
		}),
	],
	output: 'static',
	prefetch: { prefetchAll: true },
	site: env.BASE_URL,
	trailingSlash: 'never',
});
