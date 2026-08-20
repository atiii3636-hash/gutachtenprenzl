import { MetadataRoute } from "next";

// KI-Crawler werden explizit erlaubt. Technisch deckt "*" sie zwar ab, aber
// OpenAI/Perplexity/Anthropic werten einen namentlichen Eintrag als klares
// Signal – und ein späteres versehentliches Disallow fällt hier sofort auf.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI – Training + Grundlage für ChatGPT-Antworten
  "OAI-SearchBot", // OpenAI – Index für ChatGPT Search
  "ChatGPT-User", // OpenAI – Live-Abruf, wenn ein Nutzer die Seite anfragt
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot", // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended", // Gemini + AI Overviews
  "Applebot",
  "Applebot-Extended", // Apple Intelligence / Siri
  "Bingbot", // Microsoft Copilot
  "Amazonbot", // Alexa+
  "meta-externalagent", // Meta AI
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://gutachtenprenzl.de/sitemap.xml",
    host: "https://gutachtenprenzl.de",
  };
}
