import { NextRequest, NextResponse } from "next/server";

// Proxy für den Fahrlehrer-Prüfungstrainer (public/trainer). Schlüssel nur als Env-Variable.
export const maxDuration = 60;

// ponytail: Limit pro Instanz im Speicher (30/Stunde/IP); bei Missbrauch durch Upstash/Vercel KV ersetzen.
const hits = new Map<string, number>();

export async function POST(req: NextRequest) {
  const { prompt } = await req.json().catch(() => ({}));
  if (typeof prompt !== "string" || !prompt || prompt.length > 40000) {
    return new NextResponse(null, { status: 400 });
  }
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim();
  const key = ip + ":" + new Date().toISOString().slice(0, 13);
  const n = (hits.get(key) || 0) + 1;
  hits.set(key, n);
  if (hits.size > 5000) hits.clear();
  if (n > 30) return new NextResponse(null, { status: 429 });

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "anthropic-version": "2023-06-01",
      "x-api-key": process.env.ANTHROPIC_API_KEY || "",
    },
    body: JSON.stringify({
      model: "claude-sonnet-5-5",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!r.ok) return new NextResponse(null, { status: r.status === 429 ? 429 : 502 });
  const j = await r.json();
  const text = (j.content || []).filter((b: { type: string }) => b.type === "text").map((b: { text: string }) => b.text).join("");
  return NextResponse.json({ text });
}
