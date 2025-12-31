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
		name: typeof nameValue === 'string' ? nameValue : '',
		email: typeof emailValue === 'string' ? emailValue : '',
		phone: typeof phoneValue === 'string' ? phoneValue : '',
		message: typeof messageValue === 'string' ? messageValue : '',
	};

	const result = contactSchema.safeParse(data);

	if (!result.success) {
		return new Response(
			JSON.stringify({
				error: 'Validation failed',
				issues: treeifyError(result.error),
			}),
			{ status: 400 },
		);
	}

	const { name, email, phone, message } = result.data;
	const contactText = phone ? `${email} / ${phone}` : email;

	try {
		const response = await resend.emails.send({
			from: 'Contact Form <mail@notifications.alex-boehm.dev>',
			to: 'mail@alex-boehm.dev',
			replyTo: email,
			subject: `New request from ${name}`,
			text: `From: ${name} (${contactText})\n\n${message}`,
		});

		console.log(response);

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		console.error('Resend error:', error);
		return new Response(JSON.stringify({ error: 'Failed to send' }), {
			status: 500,
		});
	}
};
