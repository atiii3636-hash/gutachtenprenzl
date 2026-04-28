"use client";
import { useState, useRef } from "react";
import { Upload, Phone, MessageCircle, CheckCircle, Camera, FileText, X, Loader2, Car, ParkingCircle, AlertTriangle, Flame } from "lucide-react";

const SCHADENSTYPEN = [
  { id: "heckauffahrunfall", label: "Auffahrunfall", icon: Car, desc: "Jemand ist hinten aufgefahren" },
  { id: "parkschaden", label: "Parkschaden", icon: ParkingCircle, desc: "Schaden beim Ein-/Ausparken" },
  { id: "seitenschaden", label: "Seitenschaden", icon: AlertTriangle, desc: "Seitliche Kollision / Spurwechsel" },
  { id: "totalschaden", label: "Totalschaden", icon: Flame, desc: "Fahrzeug nicht mehr reparierbar" },
  { id: "sonstiges", label: "Sonstiger Schaden", icon: FileText, desc: "Anderer Unfalltyp" },
];

export default function DamageFormSection() {
  const [schadenstyp, setSchadenstyp] = useState<string | null>(null);
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
      formData.append("schadenstyp", schadenstyp ?? "nicht angegeben");
      compressed.forEach((file) => formData.append("fotos", file));

      const res = await fetch("/api/contact", { method: "POST", body: formData });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "conversion", { send_to: "AW-18025620294/frZvCLbrpJAcEMbGpJND" });
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
      <section id="schaden" className="py-20 px-5 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-[#22c55e]" />
          </div>
          <h2 className="font-display font-black text-3xl text-[#080D14] mb-3 uppercase">Anfrage eingegangen!</h2>
          <p className="text-gray-500 text-[15px] mb-2">Wir melden uns <strong className="text-[#080D14]">innerhalb von 30 Minuten</strong> bei Ihnen.</p>
          <p className="text-gray-400 text-[14px] mb-8">Bei Notfall direkt anrufen:</p>
          <a href="tel:+4915560003661" className="inline-flex items-center gap-3 bg-[#E11D2F] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/25 hover:bg-[#B91C1C] transition-all">
            <Phone size={20} />+49 155 60003661
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="schaden" className="py-0 bg-white">
      <div className="h-1 bg-[#E11D2F]" />
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#16a34a] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            Kostenlose Schadensprüfung — Antwort in 30 Min.
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#080D14] uppercase tracking-tight leading-tight mb-3">
            Schaden jetzt<br />
            <span className="text-[#E11D2F]">online melden</span>
          </h2>
          <p className="text-gray-500 text-[16px] max-w-lg mx-auto">
            Fotos hochladen, Formular ausfüllen — wir melden uns in <strong>30 Minuten</strong> und übernehmen alles für Sie.
          </p>
        </div>

        {/* Step 1 – Schadenstyp */}
        <div className="mb-10">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">
            Schritt 1 — Was für ein Schaden?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {SCHADENSTYPEN.map(({ id, label, icon: Icon, desc }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSchadenstyp(id)}
                className={`group relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center transition-all ${
                  schadenstyp === id
                    ? "border-[#E11D2F] bg-[#E11D2F]/5 shadow-md shadow-[#E11D2F]/10"
                    : "border-gray-100 bg-gray-50 hover:border-[#E11D2F]/40 hover:bg-gray-100"
                }`}
              >
                {schadenstyp === id && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#E11D2F] flex items-center justify-center">
                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  schadenstyp === id ? "bg-[#E11D2F] text-white" : "bg-gray-200 text-gray-500 group-hover:bg-[#E11D2F]/10 group-hover:text-[#E11D2F]"
                }`}>
                  <Icon size={18} />
                </div>
                <p className={`font-bold text-[13px] leading-tight transition-colors ${schadenstyp === id ? "text-[#E11D2F]" : "text-gray-700"}`}>
                  {label}
                </p>
                <p className="text-[11px] text-gray-400 leading-snug hidden sm:block">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 – Form (slides in after type selection) */}
        <div className={`transition-all duration-300 ${schadenstyp ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-6">
            Schritt 2 — Kontakt & Fotos
          </p>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left – File Upload */}
            <div>
              <div
                className={`relative rounded-2xl border-2 border-dashed transition-all cursor-pointer ${
                  dragging ? "border-[#E11D2F] bg-[#E11D2F]/5" : "border-gray-200 bg-gray-50 hover:border-[#E11D2F]/50 hover:bg-gray-100"
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input ref={fileInputRef} type="file" multiple accept="image/*,.pdf" className="hidden" onChange={handleFileChange} />
                <div className="p-10 text-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors ${dragging ? "bg-[#E11D2F]" : "bg-gray-200"}`}>
                    <Upload size={24} className={dragging ? "text-white" : "text-gray-400"} />
                  </div>
                  <p className="font-display font-bold text-[#080D14] text-[16px] mb-1">Fotos hier ablegen</p>
                  <p className="text-gray-400 text-[13px] mb-1">oder klicken zum Auswählen</p>
                  <p className="text-[#22c55e] text-[12px] font-medium mb-4">Fotos sind optional — auch ohne Fotos möglich</p>
                  <div className="flex items-center justify-center gap-4 text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Camera size={12} />JPG, PNG</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><FileText size={12} />PDF bis 20MB</span>
                  </div>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {files.map((file, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square flex items-center justify-center group">
                      {file.type.startsWith("image/") ? (
                        <img src={URL.createObjectURL(file)} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex flex-col items-center gap-1">
                          <FileText size={24} className="text-gray-400" />
                          <span className="text-[10px] text-gray-400 px-1 truncate w-full text-center">{file.name}</span>
                        </div>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); removeFile(i); }}
                        className="absolute top-1 right-1 w-5 h-5 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { val: "0 €", label: "Kostenlos*" },
                  { val: "24h", label: "Gutachten" },
                  { val: "TÜV", label: "Zertifiziert" },
                ].map(({ val, label }) => (
                  <div key={val} className="bg-[#080D14] rounded-xl p-4 text-center">
                    <p className="font-display font-black text-[22px] text-white leading-none">{val}</p>
                    <p className="text-[11px] text-white/40 mt-1">{label}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-2 text-center">* kostenlos bei Fremdverschulden</p>
            </div>

            {/* Right – Form */}
            <form onSubmit={handleSubmit} className="bg-[#080D14] rounded-2xl p-8 space-y-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-white text-[20px] uppercase tracking-tight">
                  Ihre Kontaktdaten
                </h3>
                {schadenstyp && (
                  <span className="text-[11px] font-bold text-[#E11D2F] bg-[#E11D2F]/10 px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {SCHADENSTYPEN.find(s => s.id === schadenstyp)?.label}
                  </span>
                )}
              </div>

              {/* Unfallart toggle */}
              <div>
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Unfallart</label>
                <div className="flex gap-2 p-1 bg-white/5 rounded-xl">
                  {(["haftpflicht", "kasko"] as const).map((typ) => (
                    <button
                      key={typ}
                      type="button"
                      onClick={() => setUnfallart(typ)}
                      className={`flex-1 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-wide transition-all ${
                        unfallart === typ ? "bg-[#E11D2F] text-white shadow-md shadow-[#E11D2F]/30" : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      {typ === "haftpflicht" ? "Haftpflicht (kostenlos)" : "Kasko"}
                    </button>
                  ))}
                </div>
                {unfallart === "haftpflicht" && (
                  <p className="text-[11px] text-[#22c55e] mt-1.5 font-medium">✓ Bei Fremdverschulden zahlen Sie 0 € — die gegnerische Versicherung übernimmt alles.</p>
                )}
              </div>

              <div>
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Ihr Name</label>
                <input
                  type="text" name="name" required placeholder="Max Mustermann"
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-[#080D14] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 block">Telefonnummer</label>
                <input
                  type="tel" name="telefon" required placeholder="+49 155 ..."
                  value={telefon} onChange={(e) => setTelefon(e.target.value)}
                  className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-[#080D14] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 block">
                  Unfallort / Beschreibung <span className="text-white/20 font-normal normal-case tracking-normal">(optional)</span>
                </label>
                <textarea
                  rows={3} name="nachricht" placeholder="Kurze Beschreibung des Schadens..."
                  value={beschreibung} onChange={(e) => setBeschreibung(e.target.value)}
                  className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-[#080D14] text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#E11D2F] transition-all resize-none"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input type="checkbox" required checked={datenschutz} onChange={(e) => setDatenschutz(e.target.checked)} className="sr-only" />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${datenschutz ? "bg-[#E11D2F] border-[#E11D2F]" : "border-white/30 bg-white/5 group-hover:border-white/50"}`}>
                    {datenschutz && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[12px] text-white/50 leading-relaxed">
                  Ich habe die{" "}
                  <a href="/datenschutz" className="text-white/80 underline hover:text-white transition-colors">Datenschutzerklärung</a>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu. *
                </span>
              </label>

              {error && <p className="text-[#E11D2F] text-[13px] text-center">{error}</p>}

              <button
                type="submit"
                disabled={sending || !datenschutz}
                className="w-full bg-[#E11D2F] hover:bg-[#B91C1C] disabled:opacity-60 text-white font-display font-black uppercase tracking-wider text-[14px] py-4 rounded-xl shadow-lg shadow-[#E11D2F]/25 hover:shadow-[#E11D2F]/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                {sending ? <><Loader2 size={16} className="animate-spin" /> Wird gesendet...</> : "Kostenlose Prüfung anfragen →"}
              </button>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-white/8" />
                <span className="text-[11px] text-white/25 uppercase tracking-wider">oder direkt</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a href="tel:+4915560003661" className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-[13px] font-semibold py-3 rounded-xl transition-all">
                  <Phone size={14} />Anrufen
                </a>
                <a href="https://wa.me/4915560003661" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#128C7E]/10 border border-[#25D366]/20 text-[#4ade80] text-[13px] font-semibold py-3 rounded-xl hover:bg-[#128C7E]/20 transition-all">
                  <MessageCircle size={14} />WhatsApp
                </a>
              </div>

              <p className="text-[11px] text-white/20 text-center leading-relaxed">
                * Pflichtfeld. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
