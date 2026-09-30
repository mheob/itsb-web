import { z } from 'zod';

const phoneRegex = /^$|^[\d\s()+-]{6,}$/;

export const contactSchema = z.object({
	email: z.email('Invalid email address'),
	message: z.string().min(10, 'Message must contain at least 10 characters'),
	name: z.string().min(2, 'Name must have at least 2 characters'),
	phone: z.string().regex(phoneRegex, 'Invalid phone number').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
