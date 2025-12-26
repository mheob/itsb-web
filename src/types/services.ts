import { z } from 'zod';


export const serviceSchema = z.object({
	icon: z.string(),
	header: z.string(),
	text: z.string(),
	num: z.string().optional(),
});

export type Service = z.infer<typeof serviceSchema>;
