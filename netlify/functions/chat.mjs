// Server-side chat proxy for the site chat widget. The AI key lives only in Netlify env (NOUS_API_KEY).
const BASE = process.env.AI_BASE_URL || "https://inference-api.nousresearch.com/v1";
const MODEL = process.env.AI_MODEL || "anthropic/claude-haiku-5.5";
const MAX_MSG = 1000, MAX_TURNS = 12;
const PHONE = "(817) 304-7896", EMAIL = "sprinkleranddrains@gmail.com";

const SYSTEM = `You are the friendly online assistant for Texas Best Sprinklers, Drainage and Lighting (sprinkleranddrains.com), serving the north Fort Worth / DFW area.
You help homeowners with sprinkler and irrigation repair, new sprinkler installs, drainage problems (French drains, standing water, yard drainage) and outdoor lighting.
Rules:
- Contact info, use ONLY: phone ${PHONE}, email ${EMAIL}. Never invent other contact details.
- Never invent or quote prices, discounts, reviews, ratings, awards, licenses, certifications, warranties or guarantees. If asked, say pricing depends on the property and a free estimate is the best way to get a real number; for licensing questions, suggest calling.
- Do not make up facts about the company. If unsure, say so and offer a call.
- Keep replies short (2-4 sentences), warm and professional. Ask one helpful question about their project when useful.
- Steer toward booking an estimate: calling ${PHONE} or using the contact page.`;

const json = (b, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json" } });
const FAIL = `Sorry, chat is unavailable right now. Please call ${PHONE}.`;

export default async (req) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  const key = process.env.NOUS_API_KEY;
  if (!key) return json({ error: `Chat is not configured yet. Please call ${PHONE}.` }, 503);
  let body;
  try { body = await req.json(); } catch { return json({ error: "Bad request" }, 400); }
  const msgs = Array.isArray(body?.messages) ? body.messages : [];
  const clean = msgs
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim())
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MSG) }));
  if (!clean.length || clean[clean.length - 1].role !== "user") return json({ error: "Message required" }, 400);
  try {
    const r = await fetch(`${BASE}/chat/completions`, {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ model: MODEL, max_tokens: 350, temperature: 0.5, messages: [{ role: "system", content: SYSTEM }, ...clean] }),
    });
    if (!r.ok) { console.error("AI upstream status", r.status); return json({ error: FAIL }, 502); }
    const d = await r.json();
    const reply = d?.choices?.[0]?.message?.content?.trim();
    if (!reply) return json({ error: `No reply. Please call ${PHONE}.` }, 502);
    return json({ reply });
  } catch {
    console.error("AI call failed");
    return json({ error: FAIL }, 502);
  }
};
export const config = { path: "/.netlify/functions/chat" };
