import { baseConfig as fmtBaseConfig } from '@mheob/oxfmt-config';
import { baseConfig } from '@mheob/oxlint-config';
import { defineConfig } from 'vite-plus';

export default defineConfig({
	fmt: { ...fmtBaseConfig },
	lint: {
		extends: [baseConfig],
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		options: { typeAware: true, typeCheck: true },
		overrides: [
			{
				// Astro and Svelte components are named in PascalCase.
				files: ['src/components/**', 'src/layouts/**'],
				rules: { 'unicorn/filename-case': ['warn', { case: 'pascalCase' }] },
			},
		],
		rules: {
			// Stylesheets and self-hosted fonts are imported for their side effects.
			'import/no-unassigned-import': ['error', { allow: ['**/*.css'] }],
			// Built-in classes cannot be made readonly, and Astro types the parameters of route handlers.
			'typescript/prefer-readonly-parameter-types': [
				'warn',
				{ allow: [{ from: 'lib', name: ['Date', 'FormData', 'URL'] }], ignoreInferredTypes: true },
			],
			'vite-plus/prefer-vite-plus-imports': 'error',
		},
	},
});
