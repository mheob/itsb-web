import type { ServiceContact } from '@/types/service-contact';
import { getAge } from '@/utils/date';

export const contactPerson = {
	name: 'Alexander Böhm',
	age: getAge(new Date(1982, 9, 21)).toString(),
	email: 'mail@alex-boehm.dev',
	phone: '+49 160 8206654',
	job: 'Freelancer',
};

export const serviceContactDataEN: ServiceContact[] = [
	{ definition: 'Name', content: contactPerson.name },
	{ definition: 'Age', content: contactPerson.age },
	{
		definition: 'E-Mail',
		content: { protocol: 'mailto:', href: contactPerson.email, title: 'Send me an email' },
	},
	{
		definition: 'Phone',
		content: { protocol: 'tel:', href: contactPerson.phone, title: 'Call me' },
	},
	{ definition: 'Job', content: contactPerson.job },
	{ definition: 'Location', content: 'Neuwied, Germany' },
];

export const serviceContactDataDE: ServiceContact[] = [
	{ definition: 'Name', content: contactPerson.name },
	{ definition: 'Alter', content: contactPerson.age },
	{
		definition: 'E-Mail',
		content: { protocol: 'mailto:', href: contactPerson.email, title: 'Schreib mir per E-Mail' },
	},
	{
		definition: 'Telefon',
		content: { protocol: 'tel:', href: contactPerson.phone, title: 'Ruf mich einfach an' },
	},
	{ definition: 'Job', content: contactPerson.job },
	{ definition: 'Standort', content: 'Neuwied, RLP' },
];
