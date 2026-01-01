import { z } from 'zod';

export const socialMediaLinkSchema = z.object({
	href: z.string(),
	title: z.string(),
	icon: z.string(),
});

export type SocialMediaLink = z.infer<typeof socialMediaLinkSchema>;
