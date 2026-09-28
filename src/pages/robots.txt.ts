import type { APIRoute } from 'astro';

// AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, …) are allowed on purpose,
// so the site can be found and cited in AI answers. `/llms.txt` gives them a summary of the site.
const getRobotsTxt = (sitemapURL: URL) => `\
# All crawlers, including AI crawlers, may read the whole site.
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(sitemapURL));
};
