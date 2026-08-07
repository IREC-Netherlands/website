import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { TO_EMAIL, FROM_EMAIL, GOOGLE_EMAIL_APP_PASSWORD } from '$env/static/private';
import nodemailer from 'nodemailer';

export const prerender = false;

// create a transporter object using SMTP
let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: FROM_EMAIL,
		pass: GOOGLE_EMAIL_APP_PASSWORD
	}
});

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const subject = data.get('subject') as string;
		const message = data.get('message') as string;

		// purposely verbose error checking
		if (!name) {
			return fail(400, { name, missing: true, text: 'Name is missing.' });
		}
		if (!email) {
			return fail(400, { email, missing: true, text: 'Email is missing.' });
		}
		if (!subject) {
			return fail(400, { subject, missing: true, text: 'Subject is missing.' });
		}
		if (!message) {
			return fail(400, { message, missing: true, text: 'Message is missing.' });
		}

		// create a plain text email with all of the fields except the honeypot
		const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

		// create an email message
		const msg = {
			from: FROM_EMAIL,
			to: TO_EMAIL,
			subject: subject,
			text: text
		};

		console.log(msg)
		transporter.sendMail(msg, (error, info) => {
			if (error) {
				console.error(error);
				return fail(500, { message: error });
			}
            console.log(info.envelope);
            console.log(info.messageId);
			return {
				status: 200,
				body: {
					message: 'Email sent successfully'
				}
			};
		});
	}
} satisfies Actions;
