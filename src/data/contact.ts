import type { Contact } from '../types/contact';

export const contactDataEN: Contact[] = [
	{
		icon: 'fa7-solid:phone',
		header: 'Phone',
		text: 'Give me a call or use one of the standard messenger services.',
		anchor: {
			protocol: 'tel:',
			href: '+49 160 8206654',
			title: 'Just give me a ring.',
		},
	},
	{
		icon: 'fa7-brands:discord',
		header: 'Discord',
		text: 'Support and enquiries can also be discussed via Discord.',
		anchor: {
			protocol: 'https://',
			href: 'discord.me/itsb',
			title: 'Use Discord as a service for instant messaging, chat, voice conferencing, and video conferencing.',
		},
	},
	{
		icon: 'fa7-solid:envelope',
		header: 'E-Mail',
		text: 'Send me a message and I will get back to you as soon as possible.',
		anchor: {
			href: 'mail@alex-boehm.dev',
			title: 'Write to me by e-mail.',
			protocol: 'mailto:',
		},
	},
];

export const contactDataDE: Contact[] = [
	{
		icon: 'fa7-solid:phone',
		header: 'Phone',
		text: 'Ruf mich an oder nutze einen der standard Messenger-Dienste.',
		anchor: {
			protocol: 'tel:',
			href: '+49 160 8206654',
			title: 'Ruf mich einfach an.',
		},
	},
	{
		icon: 'fa7-brands:discord',
		header: 'Discord',
		text: 'Support und Anfragen können auch per Discord besprochen werden.',
		anchor: {
			protocol: 'https://',
			href: 'discord.me/itsb',
			title: 'Nutze Discord als Dienst für Instant Messaging, Chat, Sprachkonferenzen und Videokonferenzen.',
		},
	},
	{
		icon: 'fa7-solid:envelope',
		header: 'E-Mail',
		text: 'Schreib mir eine Nachricht und ich werde mich zeitnah zurückmelden.',
		anchor: {
			href: 'mail@alex-boehm.dev',
			title: 'Schreib mir per E-Mail.',
			protocol: 'mailto:',
		},
	},
];
