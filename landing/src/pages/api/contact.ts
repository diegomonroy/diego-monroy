// Este endpoint maneja el envío de correos via Mailgun (SSR).
// Requiere output: "server" + adapter: netlify() en astro.config.mjs
// y la variable de entorno MAILGUN_API_KEY en Netlify.
//
// Actualmente el formulario usa Web3Forms (cliente → api.web3forms.com)
// y el sitio es output: "static", por lo que este endpoint NO está activo.
//
// Para reactivar Mailgun:
//   1. Cambiar astro.config.mjs a output: "server" y agregar adapter: netlify()
//   2. Configurar MAILGUN_API_KEY en Netlify → Site configuration → Environment variables
//      NUNCA hardcodear la key aquí — usar siempre import.meta.env.MAILGUN_API_KEY
//   3. Conectar el sitio a GitHub para que Netlify CI despliegue las funciones SSR
//   4. Descomentar el código de abajo y actualizar contact.astro para que haga POST a /api/contact

/*
import type { APIRoute } from "astro";
import FormData from "form-data";
import Mailgun from "mailgun.js";

// Rate limiting en memoria (reinicia con cada función serverless — suficiente para protección básica)
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 3;            // máximo 3 envíos por IP por minuto

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return false;
}

// Sanitiza texto plano eliminando HTML tags y controlando longitud
function sanitizeText(input: string, maxLength: number): string {
  return input.replace(/<[^>]*>/g, "").trim().slice(0, maxLength);
}

// Valida formato de email básico
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress ?? "unknown";

  // Rate limiting por IP
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Intenta en un momento." }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": "60" },
    });
  }

  const formData = await request.formData();

  // Honeypot check — bots rellenan este campo invisible
  if (formData.get("botcheck")) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rawName = formData.get("from_name")?.toString() ?? "";
  const rawEmail = formData.get("reply_to")?.toString() ?? "";
  const rawMessage = formData.get("message")?.toString() ?? "";

  const name = sanitizeText(rawName, 100);
  const email = sanitizeText(rawEmail, 254);
  const message = sanitizeText(rawMessage, 2000);

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Todos los campos son requeridos." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: "El correo electrónico no es válido." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: import.meta.env.MAILGUN_API_KEY, // Siempre desde variable de entorno
  });

  try {
    const result = await mg.messages.create("mg.ascensoinversiones.com.co", {
      from: "DiegoMonroy.dev <admin@ascensoinversiones.com.co>",
      to: ["dmsoftwaresas@gmail.com"],
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
      html: `
        <h2>Nuevo mensaje desde diegomonroy.dev</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // No exponer detalles internos del error al cliente
    console.error("Mailgun error:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el mensaje." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
*/
