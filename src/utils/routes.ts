type RouteName = 'imprint' | 'privacy' | 'home';

const routes: Record<string, Record<RouteName, string>> = {
	en: {
		home: '/',
		imprint: '/imprint',
		privacy: '/privacy',
	},
	de: {
		home: '/de',
		imprint: '/de/impressum',
		privacy: '/de/datenschutz',
	},
};

/**
 * Given the current path, finds the equivalent path in the target locale.
 * This enables proper language switching for pages with different slugs per locale
 * (e.g., /imprint -> /de/impressum, /de/datenschutz -> /privacy).
 *
 * @param currentPath - The current URL pathname.
 * @param targetLocale - The locale to switch to ('en' | 'de').
 * @returns The equivalent path in the target locale, or the home page if not found.
 */
export function getLocalizedPath(currentPath: string, targetLocale: string): string {
	// Normalize path by removing trailing slash (except for root paths)
	const normalizedPath = currentPath === '/' || currentPath === '/de'
		? currentPath
		: currentPath.replace(/\/$/, '');

	// Find which route name this path corresponds to
	for (const [_locale, localeRoutes] of Object.entries(routes)) {
		for (const [routeName, path] of Object.entries(localeRoutes)) {
			if (path === normalizedPath) {
				// Found the route, return the equivalent in target locale
				return routes[targetLocale]?.[routeName as RouteName] || routes.en[routeName as RouteName];
			}
		}
	}

	// If not found in routes, return the home page for the target locale
	return routes[targetLocale]?.home || '/';
}

/**
 * Returns the localized URL path for a given route name and locale.
 *
 * @param locale - The locale string (e.g., 'en', 'de').
 * @param routeName - The name of the route (e.g., 'imprint', 'privacy', 'home').
 * @returns The localized URL path as a string. Defaults to English if not found.
 */
export function getLocalizedRoute(locale: string, routeName: RouteName): string {
	return routes[locale]?.[routeName] || routes.en[routeName];
}

/**
 * Returns the absolute localized URL for a given route name and locale.
 *
 * @param locale - The locale string (e.g., 'en', 'de').
 * @param routeName - The name of the route (e.g., 'imprint', 'privacy', 'home').
 * @param site - The base site URL (defaults to import.meta.env.SITE).
 * @returns The absolute URL to the localized route as a string.
 */
export function getAbsoluteLocalizedRoute(
	locale: string,
	routeName: RouteName,
	site: string = import.meta.env.SITE,
): string {
	const path = getLocalizedRoute(locale, routeName);
	return new URL(path, site).toString();
}
