type Locale = 'en' | 'de';

type NestedRecord = { [key: string]: string | NestedRecord };
type Translations = Record<Locale, NestedRecord>;

type FlattenKeys<T, Prefix extends string = '', Depth extends number[] = []> = Depth['length'] extends 4
	? Prefix
	: T extends string
		? Prefix
		: {
				[K in keyof T]: K extends string
					? FlattenKeys<T[K], Prefix extends '' ? K : `${Prefix}.${K}`, [...Depth, 0]>
					: never;
			}[keyof T];

function getNestedValue(obj: NestedRecord, path: string): string | undefined {
	const keys = path.split('.');
	let current: string | NestedRecord | undefined = obj;

	for (const key of keys) {
		if (current === undefined || typeof current === 'string') {
			return undefined;
		}
		current = current[key];
	}

	return typeof current === 'string' ? current : undefined;
}

function interpolate(text: string, values: Record<string, string | number>): string {
	return text.replaceAll(/{(\w+)}/g, (_, key) => String(values[key] ?? `{${key}}`));
}

/**
 * Returns a translation function for the specified language and translations object.
 *
 * Supports nested objects with dot notation access (e.g., "nav.home", "hero.title").
 *
 * Supports interpolation with {placeholder} syntax.
 *
 * If a translation for the given key is not found in the specified language,
 * it will fall back to the English ('en') translation, and finally to the key itself.
 *
 * @template T - The type of the translations object.
 * @param ui Translations object mapping locale codes to translation key/value pairs (can be nested).
 * @param lang Current locale ('en' | 'de').
 * @returns A translation function that accepts a dot-notation key and optional interpolation values.
 *
 * @example
 * const t = useTranslations(
 *   {
 *     en: { nav: { home: "Home" }, greeting: "Hello {name}!", copyright: "Copyright &copy; {year}" },
 *     de: { nav: { home: "Startseite" }, greeting: "Hallo {name}!", copyright: "Urheberrecht &copy; {year}" }
 *   },
 *   "de"
 * );
 * t("nav.home"); // "Startseite"
 * t("greeting", { name: "Alex" }); // "Hallo Alex!"
 * t("copyright", { year: 2025 }); // "Urheberrecht &copy; 2025"
 */
export function useTranslations<T extends Translations>(
	ui: T,
	lang: Locale,
): (key: FlattenKeys<T[Locale]>, values?: Record<string, string | number>) => string {
	return function t(key: FlattenKeys<T[Locale]>, values?: Record<string, string | number>): string {
		const keyStr = key as string;
		const text = getNestedValue(ui[lang], keyStr) ?? getNestedValue(ui.en, keyStr) ?? keyStr;
		return values ? interpolate(text, values) : text;
	};
}
