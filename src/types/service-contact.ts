import { z } from 'zod';

import { protocolSchema } from './url';

export const serviceContactSchema = z.object({
	definition: z.string(),
	content: z.string().or(
		z.object({
			protocol: protocolSchema,
			href: z.string(),
			title: z.string(),
		}),
	),
});

export type ServiceContact = z.infer<typeof serviceContactSchema>;
