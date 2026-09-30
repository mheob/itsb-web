import { z } from 'zod';

export const testimonialSchema = z.object({
	company: z.string(),
	image: z.custom<ImageMetadata>(),
	name: z.string(),
	quote: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
