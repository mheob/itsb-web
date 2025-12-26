import z from 'zod';

export const testimonialSchema = z.object({
	quote: z.string(),
	name: z.string(),
	company: z.string(),
	image: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
