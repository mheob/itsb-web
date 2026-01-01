import { z } from 'zod';

export const statSchema = z.object({
	lowerTitle: z.string(),
	upperTitle: z.string(),
	value: z.number(),
	duration: z.number().optional(),
	format: z.boolean().optional(),
	initial: z.number().optional(),
	prefix: z.string().optional(),
	roundTo: z.number().optional(),
	step: z.number().optional(),
	suffix: z.string().optional(),
});

export type Stat = z.infer<typeof statSchema>;
