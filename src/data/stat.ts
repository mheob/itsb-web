import type { Stat } from '@/types/stat';

export const statDataEN: Stat[] = [
	{
		upperTitle: 'so far',
		lowerTitle: 'completed projects',
		value: 17,
	},
	{
		upperTitle: 'over',
		lowerTitle: 'lines of code',
		value: 410,
		initial: 150,
		suffix: 'k',
	},
	{
		upperTitle: 'currently',
		lowerTitle: 'active customers',
		value: 8,
	},
];

export const statDataDE: Stat[] = [
	{
		upperTitle: 'bislang',
		lowerTitle: 'vollendete Projekte',
		value: 17,
	},
	{
		upperTitle: 'über',
		lowerTitle: 'erstellte Codezeilen',
		value: 410,
		initial: 150,
		suffix: 'k',
	},
	{
		upperTitle: 'aktuell',
		lowerTitle: 'aktive Kunden',
		value: 8,
	},
];
