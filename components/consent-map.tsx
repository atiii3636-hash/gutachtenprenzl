"use client";
import { useState } from "react";

// Google Maps erst nach Klick laden: Beim Laden geht die IP-Adresse an Google (Abmahnrisiko ohne Einwilligung).
export default function ConsentMap({ src, title, className = "" }: { src: string; title: string; className?: string }) {
  const [on, setOn] = useState(false);
  if (on) {
    return (
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className={className}
      />
    );
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-3 bg-[#0b0b10] p-6 text-center ${className}`}>
      <p className="max-w-md text-[13px] leading-relaxed text-white/55">
        Prenzlauer Allee 88, 10405 Berlin. Mit dem Laden der Karte werden Daten, darunter Ihre IP-Adresse, an Google
        übertragen. Mehr in der{" "}
        <a href="/datenschutz" className="underline">Datenschutzerklärung</a>.
      </p>
      <button
        onClick={() => setOn(true)}
        className="rounded-xl bg-[#E11D2F] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#B91C1C]"
      >
        Karte laden
      </button>
    </div>
  );
}
