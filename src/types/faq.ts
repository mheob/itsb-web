import { z } from 'zod';

export const faqSchema = z.object({
	answer: z.string(),
	question: z.string(),
});

export type Faq = z.infer<typeof faqSchema>;
