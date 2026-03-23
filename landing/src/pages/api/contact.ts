import formData from 'form-data';
import Mailgun from 'mailgun.js';
import type { APIRoute } from 'astro';

const mailgun = new Mailgun( formData );
const mg = mailgun.client( {
	username: 'api',
	key: import.meta.env.MAILGUN_API_KEY,
	url: 'https://api.mailgun.net'
} );

const DOMAIN = 'mg.ascensoinversiones.com.co';

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.formData();
		const name = data.get( 'from_name' )?.toString();
		const email = data.get( 'reply_to' )?.toString();
		const message = data.get( 'message' )?.toString();
		if ( ! name || ! email || ! message ) {
			return new Response(
				JSON.stringify({
					error: 'Missing required fields',
				}),
				{ status: 400 }
			);
		}
		const messageData = {
			from: 'DiegoMonroy.dev <admin@ascensoinversiones.com.co>',
			to: 'dmsoftwaresas@gmail.com',
			subject: `Nuevo mensaje de contacto de ${name}`,
			text: `Has recibido un nuevo mensaje desde tu portafolio.\n\nNombre: ${name}\nCorreo electrónico: ${email}\n\nMensaje:\n${message}`,
			html: `
				<h3>Nuevo Mensaje de Contacto</h3>
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Correo electrónico:</strong> ${email}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message.replace(/\\n/g, '<br>')}</p>
			`,
		};
		const response = await mg.messages.create( DOMAIN, messageData );
		return new Response(
			JSON.stringify({
				success: true,
				message: 'Correo enviado correctamente',
				id: response.id,
			}),
			{ status: 200 }
		);
	} catch ( error: any ) {
		console.error( 'Mailgun error:', error );
		return new Response(
			JSON.stringify({
				error: error.message || 'Error al enviar el correo',
			}),
			{ status: 500 }
		);
	}
};
