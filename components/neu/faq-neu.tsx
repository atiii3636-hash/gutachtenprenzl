"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";

const KATEGORIEN = ["ALLE", "KOSTEN", "ABLAUF", "VERSICHERUNG", "VOR-ORT"] as const;
type Kategorie = (typeof KATEGORIEN)[number];

// ponytail: Kategorie per Stichwort aus der Frage abgeleitet statt Daten zu duplizieren.
function kategorieVon(q: string): Kategorie {
  const s = q.toLowerCase();
  if (/(kostet|kosten|zahlt|trägt|bezahl)/.test(s)) return "KOSTEN";
  if (/(nähe|mobil|prenzlauer|pankow|wochenende|wo finde)/.test(s)) return "VOR-ORT";
  if (/versicherung/.test(s)) return "VERSICHERUNG";
  return "ABLAUF";
}

export default function FaqNeu() {
  const [open, setOpen] = useState<number | null>(null);
  const [kat, setKat] = useState<Kategorie>("ALLE");

  const sichtbar = faqs
    .map((f, i) => ({ ...f, i, kat: kategorieVon(f.q) }))
    .filter((f) => kat === "ALLE" || f.kat === kat);

  return (
    <div>
      {/* Filter-Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-10" data-reveal>
        {KATEGORIEN.map((k) => (
          <button
            key={k}
            onClick={() => { setKat(k); setOpen(null); }}
            className={`px-4 py-2 rounded-lg text-[12px] font-bold tracking-widest transition-all ${
              kat === k
                ? "bg-[#E11D2F] text-white"
                : "bg-white/[0.04] border border-white/10 text-white/50 hover:text-white hover:border-white/25"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="space-y-2" data-reveal>
        {sichtbar.map((faq) => (
          <div
            key={faq.i}
            className={`border rounded-lg transition-all duration-200 overflow-hidden bg-white/[0.03] ${
              open === faq.i ? "border-[#E11D2F]/40" : "border-white/8 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => setOpen(open === faq.i ? null : faq.i)}
              aria-expanded={open === faq.i}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-4 min-w-0">
                <span className="hidden sm:inline text-[10px] font-bold tracking-[0.2em] text-[#E11D2F]/70 flex-shrink-0">
                  {faq.kat}
                </span>
                <span className={`text-[15px] font-semibold leading-snug transition-colors ${open === faq.i ? "text-white" : "text-white/75"}`}>
                  {faq.q}
                </span>
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all ${
                  open === faq.i ? "bg-[#E11D2F] text-white" : "bg-white/8 text-white/40"
                }`}
              >
                {open === faq.i ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            {/* Antwort steht immer im HTML, damit Google sie ohne Klick liest.
                grid-rows 0fr/1fr statt max-height: animiert auf die echte Höhe,
                lange Antworten werden dadurch nie abgeschnitten. */}
            <div
              id={`faq-antwort-${faq.i}`}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                open === faq.i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-white/50 text-[14px] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
