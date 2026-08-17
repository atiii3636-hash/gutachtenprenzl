"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 px-5 bg-[#080D14] border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12" data-reveal>
          <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
            Häufige Fragen
          </span>
          <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px] leading-tight">
            Ihre Fragen — unsere Antworten
          </h2>
        </div>

        <div className="space-y-2" data-reveal style={{ transitionDelay: "120ms" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden bg-[#0C1420] ${
                open === i ? "border-[#E11D2F]/30" : "border-white/8 hover:border-white/15"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-[15px] font-semibold leading-snug transition-colors ${open === i ? "text-white" : "text-white/80"}`}>
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    open === i ? "bg-[#E11D2F] text-white" : "bg-white/8 text-white/40"
                  }`}
                >
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {/* Antwort steht immer im HTML (SSR + Crawler lesen sie), nur die Höhe wird animiert */}
              <div
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-200 ${open === i ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-6 pb-5 text-white/55 text-[14px] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
