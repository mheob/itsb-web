import z from 'zod';

export const testimonialSchema = z.object({
	quote: z.string(),
	name: z.string(),
	company: z.string(),
	image: z.custom<ImageMetadata>(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
