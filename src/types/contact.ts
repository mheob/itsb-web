import { z } from 'zod';

import { protocolSchema } from './url';

export const contactSchema = z.object({
	anchor: z.object({
		href: z.string(),
		protocol: protocolSchema,
		title: z.string(),
	}),
	header: z.string(),
	icon: z.string(),
	text: z.string(),
});

export type Contact = z.infer<typeof contactSchema>;
