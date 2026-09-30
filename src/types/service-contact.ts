import { z } from 'zod';

import { protocolSchema } from './url';

export const serviceContactSchema = z.object({
	content: z.string().or(
		z.object({
			href: z.string(),
			protocol: protocolSchema,
			title: z.string(),
		}),
	),
	definition: z.string(),
});

export type ServiceContact = z.infer<typeof serviceContactSchema>;
