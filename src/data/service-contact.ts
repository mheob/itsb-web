import type { ServiceContact } from '@/types/service-contact';
import { getAge } from '@/utils/date';

export const serviceContactDataEN: ServiceContact[] = [
	{ definition: 'Name', content: 'Alexander Böhm' },
	{ definition: 'Age', content: getAge(new Date(1982, 9, 21)).toString() },
	{
		definition: 'E-Mail',
		content: {
			protocol: 'mailto:',
			href: 'mail@alex-boehm.dev',
			title: 'Send me an email',
		},
	},
	{
		definition: 'Phone',
		content: {
			protocol: 'tel:',
			href: '+49 160 8206654',
			title: 'Call me',
		},
	},
	{ definition: 'Job', content: 'Freelancer' },
	{ definition: 'Location', content: 'Neuwied, Germany' },
];

export const serviceContactDataDE: ServiceContact[] = [
	{ definition: 'Name', content: 'Alexander Böhm' },
	{ definition: 'Alter', content: getAge(new Date(1982, 9, 21)).toString() },
	{
		definition: 'E-Mail',
		content: {
			protocol: 'mailto:',
			href: 'mail@alex-boehm.dev',
			title: 'Schreib mir per E-Mail',
		},
	},
	{
		definition: 'Telefon',
		content: {
			protocol: 'tel:',
			href: '+49 160 8206654',
			title: 'Ruf mich einfach an',
		},
	},
	{ definition: 'Job', content: 'Freelancer' },
	{ definition: 'Standort', content: 'Neuwied, RLP' },
];
