import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { treeifyError } from 'zod';

import { contactSchema } from '@/types/contact-form';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();

	const nameValue = formData.get('name');
	const emailValue = formData.get('email');
	const phoneValue = formData.get('phone');
	const messageValue = formData.get('message');

	const data = {
		email: typeof emailValue === 'string' ? emailValue : '',
		message: typeof messageValue === 'string' ? messageValue : '',
		name: typeof nameValue === 'string' ? nameValue : '',
		phone: typeof phoneValue === 'string' ? phoneValue : '',
	};

	const result = contactSchema.safeParse(data);

	if (!result.success) {
		return Response.json(
			{
				error: 'Validation failed',
				issues: treeifyError(result.error),
			},
			{ status: 400 },
		);
	}

	const { name, email, phone, message } = result.data;
	const contactText = phone ? `${email} / ${phone}` : email;

	try {
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
			return Response.json({ error: 'Failed to send' }, { status: 500 });
		}

		return Response.json({ success: true }, { status: 200 });
	} catch (error) {
		console.error('Resend error:', error);
		return Response.json({ error: 'Failed to send' }, { status: 500 });
	}
};
