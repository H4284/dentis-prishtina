import { contactSchema } from "../lib/contact-schema";

export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  CONTACT_TO: string;
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method === "POST") {
        return handleContact(request, env);
      }
      return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json({ ok: false, error: "Not found" }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  // Honeypot first — silent success
  if (typeof raw.company === "string" && raw.company.length > 0) {
    return Response.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "Validation failed" }, { status: 400 });
  }

  const turnstile = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: parsed.data.turnstileToken,
      }),
    },
  );
  const turnstileJson = (await turnstile.json()) as { success?: boolean };
  if (!turnstileJson.success) {
    return Response.json({ ok: false, error: "Turnstile failed" }, { status: 400 });
  }

  const resend = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: "Dentis Prishtina <onboarding@resend.dev>",
      to: [env.CONTACT_TO],
      reply_to: parsed.data.email,
      subject: `Contact — ${parsed.data.name}`,
      text: parsed.data.message,
    }),
  });

  if (!resend.ok) {
    return Response.json({ ok: false, error: "Email failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
