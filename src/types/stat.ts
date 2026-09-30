import { z } from 'zod';

export const statSchema = z.object({
	duration: z.number().optional(),
	format: z.boolean().optional(),
	initial: z.number().optional(),
	lowerTitle: z.string(),
	prefix: z.string().optional(),
	roundTo: z.number().optional(),
	step: z.number().optional(),
	suffix: z.string().optional(),
	upperTitle: z.string(),
	value: z.number(),
});

export type Stat = z.infer<typeof statSchema>;
