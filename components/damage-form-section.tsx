"use client";
import { useState, useRef } from "react";
import { Upload, Phone, CheckCircle, Camera, FileText, X, Loader2 } from "lucide-react";

export default function DamageFormSection() {
  const [unfallart, setUnfallart] = useState<"haftpflicht" | "kasko">("haftpflicht");
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [telefon, setTelefon] = useState("");
  const [beschreibung, setBeschreibung] = useState("");
  const [datenschutz, setDatenschutz] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith("image/") || f.type === "application/pdf");
    setFiles(prev => [...prev, ...dropped].slice(0, 6));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const picked = Array.from(e.target.files);
    setFiles(prev => [...prev, ...picked].slice(0, 6));
  };

  const removeFile = (idx: number) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const compressImage = (file: File): Promise<File> => {
    if (!file.type.startsWith("image/")) return Promise.resolve(file);
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);
        const MAX = 1600;
        let { width, height } = img;
        if (width > MAX) { height = Math.round((height * MAX) / width); width = MAX; }
        if (height > MAX) { width = Math.round((width * MAX) / height); height = MAX; }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => resolve(blob ? new File([blob], file.name.replace(/\.[^.]+$/, ".jpg"), { type: "image/jpeg" }) : file),
          "image/jpeg", 0.82
        );
      };
      img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
      img.src = url;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const compressed = await Promise.all(files.map(compressImage));
      const formData = new FormData();
      formData.append("name", name);
      formData.append("telefon", telefon);
      formData.append("beschreibung", beschreibung);
      formData.append("unfallart", unfallart);
      formData.append("schadenstyp", "nicht angegeben");
      compressed.forEach((file) => formData.append("fotos", file));

      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        const raw = telefon.trim().replace(/[\s\-\(\)]/g, "");
        const phoneE164 = raw.startsWith("+") ? raw : `+49${raw.replace(/^0/, "")}`;
        (window as any).gtag("event", "conversion", {
          send_to: "AW-18025620294/frZvCLbrpJAcEMbGpJND",
          user_data: { phone_number: phoneE164 },
        });
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(`Etwas ist schiefgelaufen (${err?.message ?? "unbekannt"}). Bitte ruf uns direkt an.`);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section id="schaden" className="py-20 px-5 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#22c55e]/15 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-[#22c55e]" />
          </div>
          <h2 className="font-display font-extrabold text-3xl text-[#080D14] mb-3">Anfrage eingegangen!</h2>
          <p className="text-gray-500 text-[15px] mb-2">Wir melden uns <strong className="text-[#080D14]">innerhalb von 30 Minuten</strong> bei Ihnen.</p>
          <p className="text-gray-400 text-[14px] mb-8">Bei Notfall direkt anrufen:</p>
          <a href="tel:+4915560003661" className="inline-flex items-center gap-3 bg-[#E11D2F] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#E11D2F]/25 hover:bg-[#C11527] transition-all">
            <Phone size={20} />+49 155 60003661
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="schaden" className="py-0 bg-[#F8FAFC] border-t border-gray-100">
      <div id="kontakt" />
      <div className="max-w-lg mx-auto px-5 py-16 md:py-24">

        {/* Header */}
        <div className="text-center mb-8" data-reveal>
          <p className="text-gray-400 text-[14px] mb-2">Kostenlose Schadenprüfung — Antwort in 30 Minuten</p>
          <h2 className="font-display font-extrabold text-3xl md:text-[36px] text-[#080D14] tracking-tight leading-tight mb-3">
            Schaden jetzt online melden
          </h2>
          <p className="text-gray-500 text-[15.5px]">
            Zwei Minuten ausfüllen — den Rest übernehmen wir für Sie.
          </p>
        </div>

        <form onSubmit={handleSubmit} data-reveal className="space-y-4">
          {/* Unfallart toggle */}
          <div className="flex gap-3">
            {(["haftpflicht", "kasko"] as const).map((typ) => (
              <button
                key={typ}
                type="button"
                onClick={() => setUnfallart(typ)}
                className={`flex-1 py-4 rounded-2xl text-[15px] font-bold transition-all ${
                  unfallart === typ
                    ? "bg-[#080D14] text-white"
                    : "bg-white border border-gray-200 text-gray-500 hover:border-gray-300"
                }`}
              >
                {typ === "haftpflicht" ? (
                  <>Haftpflicht <span className="text-[#22c55e]">(0 €)</span></>
                ) : (
                  "Kasko"
                )}
              </button>
            ))}
          </div>

          <div>
            <label htmlFor="schaden-name" className="sr-only">Ihr Name</label>
            <input
              id="schaden-name"
              type="text" name="name" required placeholder="Ihr Name"
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#080D14] text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all"
            />
          </div>

          <div>
            <label htmlFor="schaden-telefon" className="sr-only">Telefonnummer</label>
            <input
              id="schaden-telefon"
              type="tel" name="telefon" required placeholder="Telefonnummer"
              value={telefon} onChange={(e) => setTelefon(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#080D14] text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all"
            />
          </div>

          <div>
            <label htmlFor="schaden-nachricht" className="sr-only">Unfallort / Beschreibung (optional)</label>
            <textarea
              id="schaden-nachricht"
              rows={3} name="nachricht" placeholder="Unfallort / Beschreibung (optional)"
              value={beschreibung} onChange={(e) => setBeschreibung(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-[#080D14] text-[15px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all resize-none"
            />
          </div>

          {/* Fotos – optional, erst hier nach den Kontaktdaten */}
          <div>
            <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFileChange} />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 border border-dashed border-gray-300 hover:border-[#E11D2F]/50 rounded-2xl px-5 py-3.5 text-[13.5px] font-medium text-gray-500 transition-all"
            >
              <Camera size={15} />
              Fotos hinzufügen <span className="text-gray-400">(optional)</span>
            </button>
            {files.length > 0 && (
              <div className="mt-3 grid grid-cols-4 gap-2">
                {files.map((file, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden bg-white border border-gray-200 aspect-square flex items-center justify-center group">
                    {file.type.startsWith("image/") ? (
                      <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <FileText size={20} className="text-gray-400" />
                    )}
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                      className="absolute top-1 right-1 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={10} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <label className="flex items-start gap-3 cursor-pointer group pt-1">
            <div className="relative mt-0.5 flex-shrink-0">
              <input type="checkbox" required checked={datenschutz} onChange={(e) => setDatenschutz(e.target.checked)} className="sr-only" />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${datenschutz ? "bg-[#E11D2F] border-[#E11D2F]" : "border-gray-300 bg-white group-hover:border-gray-400"}`}>
                {datenschutz && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-[12.5px] text-gray-500 leading-relaxed">
              Ich habe die{" "}
              <a href="/datenschutz" className="text-[#080D14] underline hover:text-[#E11D2F] transition-colors">Datenschutzerklärung</a>{" "}
              gelesen und stimme der Verarbeitung meiner Daten zu. *
            </span>
          </label>

          {error && <p className="text-[#E11D2F] text-[13px] text-center">{error}</p>}

          <button
            type="submit"
            disabled={sending || !datenschutz}
            className="w-full bg-[#E11D2F] hover:bg-[#C11527] disabled:opacity-60 text-white font-bold text-[15px] py-4 rounded-full shadow-lg shadow-[#E11D2F]/25 hover:shadow-[#E11D2F]/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            {sending ? <><Loader2 size={16} className="animate-spin" /> Wird gesendet...</> : "Kostenlose Prüfung anfragen →"}
          </button>

          <p className="text-[11px] text-gray-400 text-center leading-relaxed">
            * Pflichtfeld. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </form>
      </div>
    </section>
  );
}
