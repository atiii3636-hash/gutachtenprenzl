"use client";
import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

// ponytail: Maschinenübersetzung per Google Website Translator statt eigener /en /tr /ru-Seiten.
// Das Skript lädt erst, wenn jemand eine Sprache wählt (Datenschutz). Upgrade-Pfad für echte,
// indexierbare Übersetzungen: next-intl mit Routen pro Sprache.
const LANGS = [
  { code: "de", label: "Deutsch" },
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

const current = () => document.cookie.match(/googtrans=\/de\/(\w+)/)?.[1] ?? "de";

function loadTranslate() {
  if (document.getElementById("gt-script")) return;
  // Google ersetzt Textknoten; React stürzt dann beim Seitenwechsel über removeChild/insertBefore.
  const rm = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(c: T): T {
    return c.parentNode === this ? (rm.call(this, c) as T) : c;
  };
  const ib = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(n: T, r: Node | null): T {
    return r && r.parentNode !== this ? n : (ib.call(this, n, r) as T);
  };
  (window as any).gtInit = () =>
    new (window as any).google.translate.TranslateElement(
      { pageLanguage: "de", includedLanguages: "tr,en,ru", autoDisplay: false },
      "google_translate_element"
    );
  const s = document.createElement("script");
  s.id = "gt-script";
  s.src = "https://translate.google.com/translate_a/element.js?cb=gtInit";
  document.body.appendChild(s);
}

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [lang, setLang] = useState("de");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = current();
    setLang(c);
    if (c !== "de") loadTranslate();
  }, []);

  const choose = (code: string) => {
    setOpen(false);
    if (code === lang) return;
    const host = location.hostname;
    const expire = "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // Cookie für Pfad und Domain löschen, sonst bleibt die alte Sprache hängen.
    document.cookie = `googtrans=${expire}; path=/`;
    document.cookie = `googtrans=${expire}; path=/; domain=${host}`;
    if (code !== "de") document.cookie = `googtrans=/de/${code}; path=/`;
    location.reload();
  };

  return (
    <div className={`relative notranslate ${className}`} translate="no">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Sprache wählen"
        aria-expanded={open}
        className="flex items-center gap-1.5 h-10 px-2.5 text-[12px] font-semibold uppercase text-white/60 hover:text-white bg-white/[0.06] border border-white/12 rounded-lg transition-colors"
      >
        <Globe size={14} />
        {lang}
      </button>
      {open && (
        <ul className="absolute right-0 top-12 min-w-[140px] list-none bg-[#0b0b0f] border border-white/10 rounded-lg shadow-xl shadow-black/50 py-1 z-50">
          {LANGS.map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => choose(code)}
                className={`w-full text-left px-4 py-2 text-[13.5px] hover:bg-white/8 ${
                  code === lang ? "text-white font-bold" : "text-white/60"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
