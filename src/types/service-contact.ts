import { z } from 'zod';

import { protocolSchema } from './url';

const contactLinkSchema = z.object({
	href: z.string(),
	protocol: protocolSchema,
	title: z.string(),
});

export const serviceContactSchema = z.object({
	content: z.string().or(contactLinkSchema),
	definition: z.string(),
});

export type ServiceContact = z.infer<typeof serviceContactSchema>;
