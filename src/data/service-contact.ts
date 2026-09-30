import type { ServiceContact } from '@/types/service-contact';
import { getAge } from '@/utils/date';

export const contactPerson = {
	age: getAge(new Date('1982-10-21T00:00')).toString(),
	email: 'mail@alex-boehm.dev',
	job: 'Freelancer',
	name: 'Alexander Böhm',
	phone: '+49 160 8206654',
};

export const serviceContactDataEN: ServiceContact[] = [
	{ content: contactPerson.name, definition: 'Name' },
	{ content: contactPerson.age, definition: 'Age' },
	{
		content: { href: contactPerson.email, protocol: 'mailto:', title: 'Send me an email' },
		definition: 'E-Mail',
	},
	{
		content: { href: contactPerson.phone, protocol: 'tel:', title: 'Call me' },
		definition: 'Phone',
	},
	{ content: contactPerson.job, definition: 'Job' },
	{ content: 'Neuwied, Germany', definition: 'Location' },
];

export const serviceContactDataDE: ServiceContact[] = [
	{ content: contactPerson.name, definition: 'Name' },
	{ content: contactPerson.age, definition: 'Alter' },
	{
		content: { href: contactPerson.email, protocol: 'mailto:', title: 'Schreib mir per E-Mail' },
		definition: 'E-Mail',
	},
	{
		content: { href: contactPerson.phone, protocol: 'tel:', title: 'Ruf mich einfach an' },
		definition: 'Telefon',
	},
	{ content: contactPerson.job, definition: 'Job' },
	{ content: 'Neuwied, RLP', definition: 'Standort' },
];
