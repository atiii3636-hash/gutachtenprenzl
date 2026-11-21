"use client";
import { useRef, useState } from "react";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";
import { trackOpenAIContact } from "@/components/openai-pixel";

// Gleiches Google-Ads-Label wie das Formular auf der Startseite (damage-form-section.tsx).
const ADS_FORM_CONVERSION = "AW-18025620294/frZvCLbrpJAcEMbGpJND";

const input =
  "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[16px] text-white placeholder:text-white/35 focus:border-[#E11D2F] focus:outline-none focus:ring-2 focus:ring-[#E11D2F]/30";
const label = "block text-[14px] font-semibold text-white/85 mb-1.5";

/** Rückruf-Formular der Landingpage /unfallgutachten-berlin. */
export default function UnfallLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const [telefonFehler, setTelefonFehler] = useState("");
  // Schutz gegen doppeltes Feuern der Conversion (Doppelklick, Re-Render)
  const gemeldet = useRef(false);
  const sendet = useRef(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ref statt State: State ist bei schnellem Doppelklick noch nicht aktualisiert
    if (sendet.current || gemeldet.current) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const telefon = String(data.get("telefon") ?? "");

    if ((telefon.match(/\d/g) ?? []).length < 6) {
      setTelefonFehler("Bitte geben Sie eine Telefonnummer ein, unter der wir Sie erreichen.");
      (form.elements.namedItem("telefon") as HTMLInputElement).focus();
      return;
    }
    setTelefonFehler("");
    if (!form.reportValidity()) return;

    data.append("unfallart", "haftpflicht");
    data.append("quelle", "Landingpage /unfallgutachten-berlin");
    sendet.current = true;
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(`HTTP ${res.status}`);

      if (!gemeldet.current) {
        gemeldet.current = true;
        window.dataLayer?.push({ event: "formular_gesendet", contact_method: "form" });
        if (typeof window.gtag === "function") {
          const raw = telefon.trim().replace(/[\s\-()/]/g, "");
          const e164 = raw.startsWith("+") ? raw : `+49${raw.replace(/^0/, "")}`;
          window.gtag("event", "conversion", {
            send_to: ADS_FORM_CONVERSION,
            user_data: { phone_number: e164 },
          });
        }
        // OpenAI Ads: formular_gesendet + lead_created, nur mit Einwilligung
        trackOpenAIContact("form");
      }
      setStatus("done");
    } catch {
      sendet.current = false;
      setStatus("idle");
      setError("Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es noch einmal oder rufen Sie uns direkt an.");
    }
  };

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl border border-[#22c55e]/30 bg-[#22c55e]/[0.07] p-6 text-center">
        <CheckCircle size={40} className="mx-auto mb-3 text-[#22c55e]" aria-hidden />
        <p className="font-display font-black text-2xl text-white mb-2">Danke, Ihre Anfrage ist da.</p>
        <p className="text-white/70 text-[15px] leading-relaxed mb-5">
          Wir rufen Sie unter der angegebenen Nummer zurück, sobald wir können. Wenn es eilt, rufen Sie uns einfach direkt an.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold text-white underline underline-offset-4">
          <Phone size={18} aria-hidden /> {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-hinweis">
      <div>
        <label htmlFor="lf-name" className={label}>Name *</label>
        <input id="lf-name" name="name" required autoComplete="name" maxLength={120} className={input} />
      </div>
      <div>
        <label htmlFor="lf-tel" className={label}>Telefonnummer *</label>
        <input
          id="lf-tel"
          name="telefon"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          maxLength={40}
          aria-invalid={!!telefonFehler}
          aria-describedby={telefonFehler ? "lf-tel-fehler" : undefined}
          className={input}
        />
        {telefonFehler && <p id="lf-tel-fehler" className="mt-1.5 text-[13px] text-[#ff6b78]">{telefonFehler}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-ort" className={label}>Unfallort <span className="font-normal text-white/45">(optional)</span></label>
          <input id="lf-ort" name="unfallort" maxLength={200} placeholder="z. B. Pankow, Schönhauser Allee" className={input} />
        </div>
        <div>
          <label htmlFor="lf-zeit" className={label}>Unfallzeitpunkt <span className="font-normal text-white/45">(optional)</span></label>
          <input id="lf-zeit" name="unfallzeit" type="date" className={`${input} [color-scheme:dark]`} />
        </div>
      </div>
      <div>
        <label htmlFor="lf-text" className={label}>Was ist passiert? <span className="font-normal text-white/45">(optional)</span></label>
        <textarea id="lf-text" name="beschreibung" rows={3} maxLength={2000} placeholder="Kurz in ein, zwei Sätzen" className={input} />
      </div>
      <label className="flex items-start gap-3 text-[14px] text-white/70 leading-relaxed cursor-pointer">
        <input type="checkbox" required className="mt-1 h-5 w-5 flex-shrink-0 accent-[#E11D2F]" />
        <span>
          Ich habe die <a href="/datenschutz" className="text-white underline underline-offset-2">Datenschutzerklärung</a> gelesen
          und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage verwendet werden. *
        </span>
      </label>

      {error && <p role="alert" className="text-[14px] text-[#ff6b78]">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E11D2F] px-6 py-4 text-[17px] font-bold text-white shadow-lg shadow-[#E11D2F]/25 transition-colors hover:bg-[#B91C1C] disabled:opacity-60"
      >
        {status === "sending" ? <><Loader2 size={18} className="animate-spin" aria-hidden /> Wird gesendet …</> : "Rückruf anfordern"}
      </button>
      <p id="form-hinweis" className="text-[12px] text-white/45">* Pflichtfeld. Ihre Angaben gehen nur an Gutachten Prenzl.</p>
    </form>
  );
}
