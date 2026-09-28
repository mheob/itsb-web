import type { Faq } from '@/types/faq';

// Also rendered as FAQPage JSON-LD (StructuredData.astro) and in /llms.txt, so keep answers plain text.
export const faqDataEN: Faq[] = [
	{
		question: 'Do you work with clubs and non-profit organisations?',
		answer:
			'Yes. Websites for clubs and non-profit organisations have been part of my work from the start, for example for TSG Irlich and HSV Neuwied. I know what matters there: current news and dates, information for members, sponsors and volunteers, and a budget that has to go a long way. Tell me what your organisation needs, and I will suggest a solution that fits.',
	},
	{
		question: 'What does a website cost?',
		answer:
			'Every project gets an individual quote. The price depends on the number of pages, the design effort, features such as forms, bookings or a members’ area, and whether content has to be written or moved from an old website. The first conversation is free: we talk about your goals, and afterwards you receive a transparent quote without obligation.',
	},
	{
		question: 'How long does a project take, and how does it work?',
		answer:
			'That depends on the scope. Every project follows the same steps: a free first conversation, the quote, design and content, development, your feedback and finally the launch. You provide texts, images and your logo, or we work them out together. You will get the expected timeline together with the quote.',
	},
	{
		question: 'Who takes care of hosting, domain and email?',
		answer:
			'I help you choose a suitable provider and set up the domain, hosting and email addresses, or I work with the provider you already have. Domain and email addresses stay in your name, so you can change providers at any time.',
	},
	{
		question: 'What happens after the launch?',
		answer:
			'I stay your contact person. I help with questions and problems, update content, add new features and keep the website technically up to date. Together we agree on the support that suits you, from occasional help to regular maintenance.',
	},
];

export const faqDataDE: Faq[] = [
	{
		question: 'Arbeitest Du auch für Vereine und gemeinnützige Organisationen?',
		answer:
			'Ja. Webseiten für Vereine und gemeinnützige Organisationen gehören von Anfang an zu meiner Arbeit, zum Beispiel für die TSG Irlich und den HSV Neuwied. Ich weiß, worauf es dort ankommt: aktuelle Neuigkeiten und Termine, Informationen für Mitglieder, Sponsoren und Ehrenamtliche und ein Budget, das weit reichen muss. Erzähl mir, was Dein Verein braucht, und ich schlage Dir eine passende Lösung vor.',
	},
	{
		question: 'Was kostet eine Website?',
		answer:
			'Jedes Projekt bekommt ein individuelles Angebot. Der Preis hängt von der Anzahl der Seiten, dem Aufwand für das Design, Funktionen wie Formularen, Buchungen oder einem Mitgliederbereich ab und davon, ob Inhalte neu geschrieben oder von einer alten Website übernommen werden. Das erste Gespräch ist kostenlos: Wir sprechen über Deine Ziele, und danach bekommst Du ein transparentes, unverbindliches Angebot.',
	},
	{
		question: 'Wie lange dauert ein Projekt und wie läuft es ab?',
		answer:
			'Das hängt vom Umfang ab. Jedes Projekt folgt denselben Schritten: ein kostenloses Erstgespräch, das Angebot, Design und Inhalte, die Entwicklung, Dein Feedback und schließlich der Livegang. Texte, Bilder und Logo lieferst Du, oder wir erarbeiten sie gemeinsam. Den voraussichtlichen Zeitplan bekommst Du zusammen mit dem Angebot.',
	},
	{
		question: 'Wer kümmert sich um Hosting, Domain und E-Mail?',
		answer:
			'Ich helfe Dir, einen passenden Anbieter auszuwählen, und richte Domain, Hosting und E-Mail-Adressen ein, oder ich arbeite mit dem Anbieter, den Du schon hast. Domain und E-Mail-Adressen laufen auf Deinen Namen, damit Du jederzeit wechseln kannst.',
	},
	{
		question: 'Was passiert nach dem Livegang?',
		answer:
			'Ich bleibe Dein Ansprechpartner. Ich helfe bei Fragen und Problemen, pflege Inhalte ein, ergänze neue Funktionen und halte die Website technisch aktuell. Gemeinsam legen wir fest, welche Betreuung zu Dir passt, von gelegentlicher Hilfe bis zur regelmäßigen Wartung.',
	},
];
