import z from 'zod';
import { protocolSchema } from './url';

export const contactSchema = z.object({
	icon: z.string(),
	header: z.string(),
	text: z.string(),
	anchor: z.object({
		protocol: protocolSchema,
		href: z.string(),
		title: z.string(),
	})
});

export type Contact = z.infer<typeof contactSchema>;
