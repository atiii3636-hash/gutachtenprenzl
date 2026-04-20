"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/faqs";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-5 bg-[#080D14]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#E11D2F] text-[11px] font-semibold uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-[#E11D2F]" />
            Häufige Fragen
            <span className="w-5 h-px bg-[#E11D2F]" />
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-tight">
            Ihre Fragen —<br />
            <span className="text-[#E11D2F]">unsere Antworten</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-[#E11D2F]/30 bg-white/4"
                  : "border-white/6 bg-white/2 hover:border-white/12"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className={`text-[15px] font-semibold leading-snug transition-colors ${open === i ? "text-white" : "text-white/75"}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  open === i ? "bg-[#E11D2F] text-white" : "bg-white/6 text-white/40"
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-white/55 text-[14px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
