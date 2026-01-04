import type { ServiceContact } from '@/types/service-contact';
import { getAge } from '@/utils/date';

const shared = {
	name: 'Alexander Böhm',
	age: getAge(new Date(1982, 9, 21)).toString(),
	email: 'mail@alex-boehm.dev',
	phone: '+49 160 8206654',
	job: 'Freelancer',
};

export const serviceContactDataEN: ServiceContact[] = [
	{ definition: 'Name', content: shared.name },
	{ definition: 'Age', content: shared.age },
	{
		definition: 'E-Mail',
		content: { protocol: 'mailto:', href: shared.email, title: 'Send me an email' },
	},
	{
		definition: 'Phone',
		content: { protocol: 'tel:', href: shared.phone, title: 'Call me' },
	},
	{ definition: 'Job', content: shared.job },
	{ definition: 'Location', content: 'Neuwied, Germany' },
];

export const serviceContactDataDE: ServiceContact[] = [
	{ definition: 'Name', content: shared.name },
	{ definition: 'Alter', content: shared.age },
	{
		definition: 'E-Mail',
		content: { protocol: 'mailto:', href: shared.email, title: 'Schreib mir per E-Mail' },
	},
	{
		definition: 'Telefon',
		content: { protocol: 'tel:', href: shared.phone, title: 'Ruf mich einfach an' },
	},
	{ definition: 'Job', content: shared.job },
	{ definition: 'Standort', content: 'Neuwied, RLP' },
];
