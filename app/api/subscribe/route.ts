import { NEWSLETTER } from "@/app/lib/site-config";

// POST /api/subscribe  { email, company? }
// Adds the email to the Beehiiv publication in NEWSLETTER.beehiivPublicationId.
// Needs BEEHIIV_API_KEY in the environment. Returns 503 until both exist, and the
// form then points people to email instead.
// Beehiiv docs: https://developers.beehiiv.com/api-reference/subscriptions/create

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const publicationId = NEWSLETTER.beehiivPublicationId;
  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!publicationId || !apiKey) {
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  let email = "";
  let honeypot = "";
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim();
    honeypot = String(body?.company ?? "");
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Bots fill the hidden field. Pretend it worked and drop it.
  if (honeypot) return Response.json({ ok: true });

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${encodeURIComponent(publicationId)}/subscriptions`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "chrisdorsey.co",
          utm_medium: "site_form",
          referring_site: "https://chrisdorsey.co",
        }),
        cache: "no-store",
      }
    );
    if (!res.ok) {
      return Response.json({ ok: false, error: "upstream", status: res.status }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
