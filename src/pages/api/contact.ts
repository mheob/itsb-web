import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { treeifyError } from 'zod';

import { type ContactFormData, contactSchema } from '@/types/contact-form';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

function readFields(formData: FormData): Record<'email' | 'message' | 'name' | 'phone', string> {
	const field = (key: string): string => {
		const value = formData.get(key);
		return typeof value === 'string' ? value : '';
	};

	return {
		email: field('email'),
		message: field('message'),
		name: field('name'),
		phone: field('phone'),
	};
}

// Sends the request by mail and returns whether Resend accepted it.
async function sendMail({
	email,
	message,
	name,
	phone,
}: Readonly<ContactFormData>): Promise<boolean> {
	const contactText = phone ? `${email} / ${phone}` : email;

	// Resend reports API errors in the result instead of throwing them.
	const { error } = await resend.emails.send({
		from: 'Contact Form <mail@notifications.alex-boehm.dev>',
		replyTo: email,
		subject: `New request from ${name}`,
		text: `From: ${name} (${contactText})\n\n${message}`,
		to: 'mail@alex-boehm.dev',
	});

	if (error) {
		console.error('Resend error:', error);
	}
	return !error;
}

export const POST: APIRoute = async ({ request }) => {
	const result = contactSchema.safeParse(readFields(await request.formData()));

	if (!result.success) {
		return Response.json(
			{
				error: 'Validation failed',
				issues: treeifyError(result.error),
			},
			{ status: 400 },
		);
	}

	try {
		if (await sendMail(result.data)) {
			return Response.json({ success: true }, { status: 200 });
		}
	} catch (error) {
		console.error('Resend error:', error);
	}

	return Response.json({ error: 'Failed to send' }, { status: 500 });
};
