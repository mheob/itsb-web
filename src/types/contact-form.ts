import { z } from 'zod';

import { phoneRegex } from '@/utils/validation';

const MESSAGE_MIN_LENGTH = 10;

export const contactSchema = z.object({
	email: z.email('Invalid email address'),
	message: z
		.string()
		.min(MESSAGE_MIN_LENGTH, `Message must contain at least ${MESSAGE_MIN_LENGTH} characters`),
	name: z.string().min(2, 'Name must have at least 2 characters'),
	phone: z.string().regex(phoneRegex, 'Invalid phone number').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
