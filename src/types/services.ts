import { z } from 'zod';

export const serviceSchema = z.object({
	header: z.string(),
	icon: z.string(),
	num: z.string().optional(),
	text: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;
