import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV, process.cwd(), '');

/** @see {@link https://astro.build/config} */
export default defineConfig({
	adapter: vercel(),
	base: '/',
	i18n: {
		defaultLocale: 'en',
		locales: ['de', 'en'],
		routing: { prefixDefaultLocale: false },
	},
	integrations: [icon(), svelte()],
	prefetch: { prefetchAll: true },
	site: env.BASE_URL,
	trailingSlash: 'never',
});
