import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

// ─── Rate limiting ────────────────────────────────────────────────────────────
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_IP  = 5;
const MAX_DAILY_TOTAL      = 150;

const ipMap    = new Map<string, { count: number; windowStart: number }>();
let dailyTotal = 0;
let dailyReset = Date.now() + 24 * 60 * 60 * 1000;

function checkRateLimit(ip: string): { allowed: boolean; reason?: string } {
  const now = Date.now();
  if (now > dailyReset) { dailyTotal = 0; dailyReset = now + 24 * 60 * 60 * 1000; }
  if (dailyTotal >= MAX_DAILY_TOTAL) return { allowed: false, reason: "Daily limit reached. Check back tomorrow." };
  const record = ipMap.get(ip);
  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now });
  } else {
    if (record.count >= MAX_REQUESTS_PER_IP) return { allowed: false, reason: `Limit reached — ${MAX_REQUESTS_PER_IP} checks per hour. Try again later.` };
    record.count++;
  }
  dailyTotal++;
  return { allowed: true };
}

let pruneCounter = 0;
function maybePrune() {
  if (++pruneCounter % 100 !== 0) return;
  const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
  for (const [k, v] of ipMap.entries()) { if (v.windowStart < cutoff) ipMap.delete(k); }
}
// ─────────────────────────────────────────────────────────────────────────────

function extractJson(text: string): string {
  // Find the first { and last } to extract JSON regardless of what's around it
  const start = text.indexOf("{");
  const end   = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) throw new Error("No JSON object found in response");
  return text.slice(start, end + 1);
}

export async function POST(request: NextRequest) {
  // Check API key first — gives a clear error instead of a cryptic SDK failure
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set");
    return NextResponse.json(
      { error: "Service not configured. Please try again later." },
      { status: 503 }
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
    maybePrune();
    const { allowed, reason } = checkRateLimit(ip);
    if (!allowed) return NextResponse.json({ error: reason }, { status: 429 });

    const body = await request.json();
    const domain   = (body.domain   ?? "").trim();
    const category = (body.category ?? "").trim();

    if (!domain || !category) {
      return NextResponse.json({ error: "Domain and category are required." }, { status: 400 });
    }
    if (domain.length > 100) {
      return NextResponse.json({ error: "Domain must be 100 characters or fewer." }, { status: 400 });
    }
    if (category.length > 120) {
      return NextResponse.json({ error: "Category must be 120 characters or fewer." }, { status: 400 });
    }

    // Strip protocol if pasted with it
    const cleanDomain = domain.replace(/^https?:\/\//i, "").replace(/\/.*$/, "").toLowerCase();

    const prompt = `You are a GEO (Generative Engine Optimization) analyst. Evaluate how visible the brand behind the domain "${cleanDomain}" is when AI assistants answer buyer queries in this category: "${category}".

Use your knowledge of ${cleanDomain} — what the company does, its products, reputation, and how established it is — to inform your analysis.

Step 1 — Generate 3 realistic buyer queries someone would type into ChatGPT, Claude, or Perplexity when researching "${category}". Write them as natural questions a real buyer would ask.

Step 2 — Answer Query #1 exactly as a helpful AI assistant would. Be thorough and recommend real brands and tools. Do NOT artificially include or exclude ${cleanDomain} — answer naturally based on your actual knowledge.

Step 3 — Analyze your own response honestly:
- Did you mention ${cleanDomain} or the brand behind it?
- How prominently?
- What competitors did you recommend?
- What specific improvements would make this brand more visible in AI answers?

Return ONLY a valid JSON object. No text before or after it. No markdown fences. Use exactly these fields:

{
  "brandName": "the company name behind ${cleanDomain}",
  "queries": ["query 1", "query 2", "query 3"],
  "simulatedQuery": "the exact query you answered in Step 2",
  "simulatedResponse": "your full AI assistant response from Step 2",
  "mentioned": true,
  "prominence": "primary",
  "competitors": ["Competitor A", "Competitor B"],
  "score": 75,
  "scoreLabel": "Strong",
  "analysis": "2-3 sentence honest analysis of the brand's AI visibility and why.",
  "recommendations": ["Specific rec 1", "Specific rec 2", "Specific rec 3"]
}

Valid values for prominence: "primary" | "secondary" | "brief" | "not mentioned"
Valid values for scoreLabel: "Not Visible" | "Low Visibility" | "Moderate" | "Strong" | "Dominant"
score must be a number 0-100. mentioned must be true or false (boolean, not string).`;

    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1800,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = message.content[0];
    if (raw.type !== "text") throw new Error("Unexpected content type from API");

    const jsonText = extractJson(raw.text);
    const result   = JSON.parse(jsonText);

    return NextResponse.json({ ...result, domain: cleanDomain });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("GEO check error:", message);

    // Surface a slightly more helpful error in non-production for debugging
    const isDev = process.env.NODE_ENV !== "production";
    return NextResponse.json(
      { error: isDev ? `Error: ${message}` : "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
