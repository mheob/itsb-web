import type { APIRoute } from 'astro';
import { contactPerson } from '@/data/service-contact';
import { serviceDataEN } from '@/data/services';
import { socialData } from '@/data/social';
import { statDataEN } from '@/data/stat';
import { getLocalizedRoute } from '@/utils/routes';

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// Summary of the site for LLMs, following https://llmstxt.org/. Built from the data files so it stays in sync.
const getLlmsTxt = (site: URL | undefined) => {
	const url = (path: string) => new URL(path, site).href;

	return `\
# ${contactPerson.name}

> ${contactPerson.name} (IT Service Böhm) is a freelance full-stack developer in Neuwied, Rhineland-Palatinate, Germany. He designs and builds websites and web applications for non-profit organisations and businesses, takes care of search engine optimisation, and supports the finished projects, including hosting through a partner.

The site is available in English and German. Both versions have the same content.

## Services

${serviceDataEN.map((service) => `- **${service.header}:** ${service.text}`).join('\n')}

## Facts

${statDataEN.map((stat) => `- ${capitalize(stat.upperTitle)} ${stat.value}${stat.suffix ?? ''} ${stat.lowerTitle}`).join('\n')}

## Contact

- Email: ${contactPerson.email}
- Phone: ${contactPerson.phone}
- Location: Neuwied, Germany
- Contact form: ${url('/#contact-section')}

## Pages

- [Home (English)](${url(getLocalizedRoute('en', 'home'))}): introduction, services, facts, testimonials and contact form
- [Startseite (Deutsch)](${url(getLocalizedRoute('de', 'home'))}): the same content in German
- [Site notice](${url(getLocalizedRoute('en', 'imprint'))}): legal information and postal address
- [Privacy policy](${url(getLocalizedRoute('en', 'privacy'))})

## Profiles

${socialData.map((social) => `- [${social.title}](${social.href})`).join('\n')}
`;
};

export const GET: APIRoute = ({ site }) => new Response(getLlmsTxt(site));
