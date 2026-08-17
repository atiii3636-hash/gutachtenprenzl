import Image from "next/image";
import { Star, Check, MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY";

const checks = [
  "TÜV-zertifiziert",
  "100% kostenlos bei unverschuldetem Unfall",
  "Einfach und unkompliziert",
  "Schnelle Abwicklung",
  "Wir fahren zu Ihnen, in ganz Berlin",
];

export default function Hero() {
  return (
    <section className="relative pt-16 bg-[#080D14] overflow-hidden min-h-[100svh] lg:min-h-0 flex flex-col">
      {/* Mobil: Unfallfoto liegt als dezenter Hintergrund hinter dem Text – nimmt
          keine Höhe weg, damit CTAs ohne Scrollen sichtbar sind */}
      <div className="lg:hidden absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <Image
          src="/inhaber.jpg"
          alt=""
          fill
          priority
          /* scale-105 kaschiert den transparenten Saum, den blur an den Kanten erzeugt */
          className="object-cover object-[35%_center] opacity-95 blur-[1.5px] scale-105"
          sizes="100vw"
          quality={80}
        />
        {/* Oben stärker abdunkeln: dort liegt das helle Auto hinter der Headline.
            Nur gültige Tailwind-Opacity-Stufen verwenden – krumme Werte wie /72
            erzeugen keine CSS-Regel, der Verlauf fällt dann still aus. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D14]/70 via-[#080D14]/60 to-[#080D14]/95" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[#E11D2F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E11D2F]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-5 pt-6 pb-16 md:pt-20 md:pb-24 flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left – content */}
          <div>
            {/* Google-Bewertungen als erstes Element: Vertrauen vor dem Versprechen */}
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/[0.09] hover:bg-white/[0.14] border border-[#FBBC04]/30 shadow-lg shadow-black/30 px-5 py-2.5 rounded-full mb-6 transition-colors animate-fade-up"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={17} className="fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </span>
              <span className="text-[14px] text-white/70 whitespace-nowrap">
                <strong className="text-white font-extrabold text-[15px]">5,0</strong> · {REVIEW_COUNT} Bewertungen
              </span>
            </a>

            <h1
              className="font-display font-extrabold text-white leading-[1.06] tracking-tight text-[clamp(25px,7.9vw,34px)] lg:text-[44px] mb-6 animate-fade-up"
              style={{ animationDelay: "70ms" }}
            >
              <span className="block text-[0.72em] font-bold text-white/90">
                Jetzt kostenlos Ihr
              </span>
              <span className="text-[#E11D2F]">
                KFZ Sachverständiger<br />&amp; Gutachter<br />in Berlin!
              </span>
            </h1>

            {/* Checkmarks */}
            <ul
              className="space-y-3 mb-7 animate-fade-up"
              style={{ animationDelay: "210ms" }}
            >
              {checks.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 mt-px">
                    <Check size={14} className="text-[#22c55e] stroke-[3]" />
                  </span>
                  <span className="text-[17px] text-white/90 font-medium">{text}</span>
                </li>
              ))}
            </ul>

            {/* Primäre CTA */}
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[17px] px-8 py-4 rounded-full shadow-lg shadow-[#E11D2F]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#E11D2F]/40 mb-6 animate-fade-up"
              style={{ animationDelay: "280ms" }}
            >
              <Phone size={18} />
              Jetzt anrufen
            </a>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366]/80 hover:bg-[#25D366] text-white font-bold text-[17px] px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/25 animate-fade-up"
              style={{ animationDelay: "350ms" }}
            >
              <MessageCircle size={18} />
              WhatsApp-Chat starten
            </a>
          </div>

          {/* Right – Unfallschaden (Stockfoto), nur Desktop – Mobil siehe Hintergrundbild oben */}
          <div className="hidden lg:block relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 h-80 sm:h-[440px] lg:h-[560px]">
              <Image
                src="/unfall-warndreieck.png"
                alt="Warndreieck nach einem Verkehrsunfall, im Hintergrund tauschen zwei Unfallbeteiligte ihre Daten aus"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={85}
              />
              {/* Leichter Verlauf unten für Badge-Lesbarkeit */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating: response time */}
            <div className="absolute -bottom-3 left-3 sm:bottom-6 sm:-left-5 bg-[#0C1420] border border-white/10 rounded-2xl shadow-xl shadow-black/40 px-4 py-3 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]" />
              </span>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Jetzt erreichbar</p>
                <p className="text-[11px] text-white/40">Antwort in ~30 Minuten</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll-Hinweis zum Weiterscrollen */}
      <a
        href="#vertrauen"
        aria-label="Weiter scrollen"
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 text-white/25 hover:text-white/50 transition-colors animate-bounce"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
