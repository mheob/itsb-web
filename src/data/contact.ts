import type { Contact } from '../types/contact';

export const contactDataEN: Contact[] = [
	{
		anchor: {
			href: '+49 160 8206654',
			protocol: 'tel:',
			title: 'Just give me a ring.',
		},
		header: 'Phone',
		icon: 'fa7-solid:phone',
		text: 'Give me a call or use one of the standard messenger services.',
	},
	{
		anchor: {
			href: 'discord.me/itsb',
			protocol: 'https://',
			title:
				'Use Discord as a service for instant messaging, chat, voice conferencing, and video conferencing.',
		},
		header: 'Discord',
		icon: 'fa7-brands:discord',
		text: 'Support and enquiries can also be discussed via Discord.',
	},
	{
		anchor: {
			href: 'mail@alex-boehm.dev',
			protocol: 'mailto:',
			title: 'Write to me by e-mail.',
		},
		header: 'E-Mail',
		icon: 'fa7-solid:envelope',
		text: 'Send me a message and I will get back to you as soon as possible.',
	},
];

export const contactDataDE: Contact[] = [
	{
		anchor: {
			href: '+49 160 8206654',
			protocol: 'tel:',
			title: 'Ruf mich einfach an.',
		},
		header: 'Phone',
		icon: 'fa7-solid:phone',
		text: 'Ruf mich an oder nutze einen der standard Messenger-Dienste.',
	},
	{
		anchor: {
			href: 'discord.me/itsb',
			protocol: 'https://',
			title:
				'Nutze Discord als Dienst für Instant Messaging, Chat, Sprachkonferenzen und Videokonferenzen.',
		},
		header: 'Discord',
		icon: 'fa7-brands:discord',
		text: 'Support und Anfragen können auch per Discord besprochen werden.',
	},
	{
		anchor: {
			href: 'mail@alex-boehm.dev',
			protocol: 'mailto:',
			title: 'Schreib mir per E-Mail.',
		},
		header: 'E-Mail',
		icon: 'fa7-solid:envelope',
		text: 'Schreib mir eine Nachricht und ich werde mich zeitnah zurückmelden.',
	},
];
