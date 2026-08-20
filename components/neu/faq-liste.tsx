"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// Aufklappbare FAQ-Liste für beliebige Fragen einer Unterseite.
// Die Antworten stehen immer im HTML (nur die Höhe wird animiert), damit
// Crawler sie lesen und das FAQPage-Schema zum sichtbaren Text passt.
export default function FaqListe({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2" data-reveal>
      {faqs.map((faq, i) => (
        <div
          key={faq.q}
          className={`border rounded-lg transition-all duration-200 overflow-hidden bg-white/[0.03] ${
            open === i ? "border-[#E11D2F]/40" : "border-white/8 hover:border-white/20"
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-a-${i}`}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span
              className={`text-[15px] font-semibold leading-snug transition-colors ${
                open === i ? "text-white" : "text-white/75"
              }`}
            >
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all ${
                open === i ? "bg-[#E11D2F] text-white" : "bg-white/8 text-white/40"
              }`}
            >
              {open === i ? <Minus size={14} /> : <Plus size={14} />}
            </span>
          </button>
          {/* grid-rows 0fr/1fr statt max-height: animiert auf die echte Höhe,
              lange Antworten werden dadurch nie abgeschnitten. */}
          <div
            id={`faq-a-${i}`}
            className={`grid transition-[grid-template-rows] duration-200 ease-out ${
              open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-white/50 text-[14px] leading-relaxed">{faq.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
