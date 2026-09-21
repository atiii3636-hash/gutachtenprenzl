import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, MessageCircle, Star, Check, ShieldCheck, MapPin, Clock,
  Search, Banknote, Zap, FileText, Camera, Send, CarFront, Scale, CalendarCheck,
} from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import FaqNeu from "@/components/neu/faq-neu";
import JsonLd from "@/components/neu/json-ld";
import DamageFormSection from "@/components/damage-form-section";
import { PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import { REVIEWS } from "@/lib/reviews";
import { faqs } from "@/lib/faqs";
import { pageMetadata, faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kfz-Gutachter Berlin: 24-Std.-Gutachten, 0 € bei Fremdschuld",
  description:
    "Unabhängiger Kfz Sachverständiger in Berlin. Gutachten in 24 Stunden, bei unverschuldetem Unfall kostenlos. TÜV-zertifiziert, in allen Bezirken vor Ort.",
  path: "/",
  keywords: [
    "KFZ Gutachter Berlin",
    "KFZ Sachverständiger Berlin",
    "Unfallgutachten Berlin",
    "Kfz Gutachter Prenzlauer Berg",
    "Gutachten nach Unfall Berlin",
  ],
});

/* ---------- Inhalte ---------- */

const heroChecks = [
  "Kostenlos bei unverschuldetem Unfall",
  "Schnell und unkompliziert",
  "Besichtigung vor Ort",
  "Jetzt ohne Termin",
];

const schritte = [
  {
    num: "01",
    kurz: "Anfrage",
    icon: Phone,
    title: "Sie melden sich",
    zeit: "Sofort, rund um die Uhr",
    text: "Ein Anruf oder eine Nachricht bei WhatsApp genügt. Sie schildern in zwei Minuten, was passiert ist. Wir sagen Ihnen direkt, welche Ansprüche Sie haben und ob sich ein Gutachten für Sie lohnt.",
    chips: ["Telefon", "WhatsApp", "Onlineformular"],
  },
  {
    num: "02",
    kurz: "Termin",
    icon: CalendarCheck,
    title: "Wir machen einen Termin",
    zeit: "Meist binnen 24 Stunden",
    text: "Sie sagen uns, wo Ihr Fahrzeug steht und wann es Ihnen passt. In den meisten Fällen sind wir noch am selben oder am nächsten Werktag bei Ihnen, auch am Wochenende.",
    chips: ["Auch samstags und sonntags"],
  },
  {
    num: "03",
    kurz: "Besichtigung",
    icon: Camera,
    title: "Wir kommen zu Ihnen",
    zeit: "Etwa 30 bis 60 Minuten",
    text: "Zu Hause, in der Werkstatt oder direkt am Unfallort. Jede Delle, jeder Kratzer und jeder verdeckte Schaden wird fotografiert und aufgenommen. Ihr Auto muss dafür nicht fahrbereit sein.",
    chips: ["Zu Hause", "Werkstatt", "Unfallort"],
  },
  {
    num: "04",
    kurz: "Gutachten",
    icon: FileText,
    title: "Sie bekommen Ihr Gutachten",
    zeit: "In der Regel in 24 Stunden",
    text: "Reparaturkosten, Wertminderung und Nutzungsausfall werden einzeln berechnet und belegt. Das Ergebnis ist rechtssicher, wird von Versicherungen im Regelfall anerkannt und ist vor Gericht verwertbar.",
    chips: ["Digital und per Post"],
  },
  {
    num: "05",
    kurz: "Auszahlung",
    icon: Send,
    title: "Wir bleiben dran",
    zeit: "Bis Ihr Geld da ist",
    text: "Das Gutachten geht direkt an die Versicherung. Bei Rückfragen antworten wir, bei Kürzungen halten wir dagegen. Sie müssen nicht selbst mit der Versicherung verhandeln.",
    chips: ["Kommunikation übernehmen wir"],
  },
];

const galerie = [
  { src: "/foto6.jpg", alt: "Ladengeschäft von Gutachten Prenzl an der Prenzlauer Allee in Berlin", label: "Unser Büro", ort: "Prenzlauer Berg", gross: true },
  { src: "/foto5.jpg", alt: "Beschädigte Fahrzeugtür eines Mercedes, davor der Ausrüstungskoffer von Gutachten Prenzl", label: "Schadenaufnahme", ort: "Vor Ort" },
  { src: "/inhaber2.jpg", alt: "Atakan Arslan fotografiert einen Fahrzeugschaden bei der Begutachtung", label: "Dokumentation", ort: "Jeder Schaden" },
  { src: "/foto7.jpg", alt: "Weißer BMW mit geöffneter Motorhaube und freigelegtem Frontbereich in der Werkstatt", label: "Verdeckte Schäden", ort: "Werkstatt" },
  { src: "/foto4.jpg", alt: "Fahrzeugflotte auf einem Betriebshof in Berlin am Abend", label: "Flotten", ort: "Gewerbe" },
  { src: "/foto3.jpg", alt: "Arbeitsplatz im Büro von Gutachten Prenzl mit Blick auf die Prenzlauer Allee", label: "Auswertung", ort: "Im Büro" },
];

const leistungen = [
  { icon: Search, badge: "Häufigster Fall", tag: "TOP 1", title: "Unfallgutachten", desc: "Unverschuldet erwischt? Die gegnerische Versicherung trägt alle Kosten. Wir sichern jeden Posten, der Ihnen zusteht.", href: "/unfallgutachten-berlin" },
  { icon: Banknote, badge: "Für Geschädigte", tag: "0 €", title: "Kostenfrei für Sie", desc: "Bei Fremdverschulden zahlen Sie nichts. Die Gutachterkosten übernimmt die Haftpflicht des Verursachers.", href: null },
  { icon: Zap, badge: "Auffahrunfall", tag: "Express", title: "Heckaufprall", desc: "Jemand ist Ihnen hinten aufgefahren? Wir sichern den vollen Anspruch inklusive Wertminderung und Nutzungsausfall.", href: "/heckauffahrunfall-berlin" },
  { icon: MapPin, badge: "Parkplatz und Fahrerflucht", tag: "Doku", title: "Parkschaden", desc: "Auto beschädigt vorgefunden? Wir dokumentieren rechtssicher, auch wenn der Verursacher unbekannt bleibt.", href: "/parkschaden-gutachten-berlin" },
  { icon: CarFront, badge: "Wirtschaftlicher Totalschaden", tag: "Markt", title: "Totalschaden", desc: "Wir ermitteln den echten Wiederbeschaffungswert. Der liegt oft deutlich über dem ersten Angebot der Versicherung.", href: "/totalschaden-gutachten-berlin" },
  { icon: Scale, badge: "Rundum betreut", tag: "Inklusive", title: "Schadensregulierung", desc: "Wir übernehmen die Kommunikation mit der Versicherung, bis alles ausgezahlt ist.", href: null },
];

const haltung = [
  { num: "01", wort: "Unabhängig", satz: "Wir arbeiten für Sie, nicht für die Versicherung.", text: "Der Gutachter der Gegenseite wird von der Gegenseite bezahlt. Wir nicht. Deshalb prüfen wir jede Position danach, was Ihnen zusteht." },
  { num: "02", wort: "Gründlich", satz: "Wo andere aufhören, fangen wir an.", text: "Wertminderung, Nutzungsausfall, verdeckte Schäden: Genau diese Posten werden gern übersehen. Wir belegen sie einzeln." },
  { num: "03", wort: "Persönlich", satz: "Ein Sachverständiger. Kein Callcenter.", text: "Sie sprechen bei jedem Auftrag direkt mit Atakan Arslan, vom ersten Anruf bis zur Auszahlung." },
];

const reviewChips = ["professionell", "schnell", "freundlich", "unkompliziert", "kompetent"];

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY";

/* ---------- Baustein ---------- */

function Kapitel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
      <span className="font-display font-black text-[#E11D2F] text-[15px]">{num}</span>
      <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">{label}</span>
    </div>
  );
}

/* ---------- Seite ---------- */

export default function NeuPage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white overflow-hidden">
      {/* FAQ-Schema muss zur sichtbaren FAQ weiter unten passen, beide ziehen aus lib/faqs. */}
      <JsonLd data={faqLd(faqs)} />
      <NavbarNeu />

      {/* ============ HERO ============ */}
      {/* Höhe und Innenabstände wachsen mit der Bildschirmhöhe des Geräts (svh),
          damit der Hero auf kleinen Handys nicht überläuft und auf großen
          Bildschirmen nicht verloren wirkt. */}
      <section className="relative px-5 pt-[clamp(6rem,14svh,8.5rem)] pb-[clamp(5rem,10svh,6.5rem)] min-h-[100svh] flex flex-col items-center justify-center">
        {/* Hintergrundfotos: links das Büro, rechts der Inhaber bei der Begutachtung.
            Groß, leicht unscharf und zur Mitte hin ausgeblendet. */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Lackmessung links, erst ab lg. Auf dem Handy würde ein zweites Bild nur unruhig wirken.
              Dateiname mit großem .JPG: auf dem Server zählt die Schreibweise.
              object-[60%] rückt Hand und Messgerät in den sichtbaren Bereich,
              bevor die Maske zur Mitte hin ausblendet. */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-[46%] hero-fade-left opacity-[0.72]">
            <Image
              src="/Lackmessung.JPG"
              alt=""
              fill
              priority
              /* scale-110 kaschiert den transparenten Saum, den der Blur an den Kanten erzeugt */
              className="object-cover object-[60%_center] blur-[3px] scale-110"
              sizes="46vw"
              quality={75}
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-full lg:w-[46%] opacity-[0.6] lg:opacity-[0.72] hero-fade-bottom lg:hero-fade-right">
            <Image
              src="/inhaber2.jpg"
              alt=""
              fill
              priority
              className="object-cover object-[center_22%] blur-[3px] scale-110"
              sizes="(max-width: 1024px) 100vw, 46vw"
              quality={75}
            />
          </div>
          <div className="absolute inset-0 bg-[#050507]/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507]" />
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E11D2F]/8 rounded-full blur-[160px] pointer-events-none" />

        {/* w-full: als Flex-Item würde der Block sonst auf seine breiteste
            Zeile wachsen und rechts aus dem Bildschirm laufen */}
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <h1
            className="font-display font-black tracking-tight leading-[1.03] text-[clamp(42px,7.6vw,78px)] mb-8 animate-fade-up"
          >
            Kfz Gutachten Berlin{" "}
            <span className="block text-[#E11D2F] font-extrabold text-[0.36em] leading-[1.35] mt-5">
              Wir kommen zu Ihnen und beraten Sie kostenlos.
            </span>
          </h1>

          {/* Mobil untereinander, ab sm als ausgewogenes 2x2-Raster.
              Einreihig würden vier Punkte 3+1 umbrechen und unruhig wirken. */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 justify-items-start w-fit mx-auto gap-x-9 gap-y-3 mb-9 animate-fade-up"
            style={{ animationDelay: "110ms" }}
          >
            {heroChecks.map((t) => (
              <span key={t} className="flex items-center gap-2.5 text-[15.5px] font-medium text-white/80">
                <Check size={18} className="text-[#22c55e] stroke-[3] flex-shrink-0" />
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-up" style={{ animationDelay: "190ms" }}>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              Kostenlos beraten lassen
            </a>
          </div>

          {/* Google-Bewertungen als eigenständiges Vertrauens-Element */}
          <div className="flex flex-col items-center gap-3.5 animate-fade-up" style={{ animationDelay: "270ms" }}>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 bg-white/[0.06] hover:bg-white/[0.12] border border-[#FBBC04]/25 hover:border-[#FBBC04]/45 backdrop-blur-sm px-3.5 py-2.5 rounded-lg shadow-md shadow-black/30 transition-all hover:-translate-y-0.5 max-w-full"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="flex items-center gap-2">
                <span className="font-display font-black text-white text-[16px] leading-none">5,0</span>
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />)}
                </span>
              </span>
              <span className="text-[12.5px] text-white/60 sm:border-l sm:border-white/15 sm:pl-3">
                {REVIEW_COUNT} Google Bewertungen
              </span>
            </a>
            <span className="text-[11px] font-bold tracking-[0.2em] text-white/35 uppercase">
              TÜV Rheinland zertifiziert
            </span>
          </div>
        </div>

        {/* Scroll-Hinweis: führt zum Formular direkt darunter */}
        <a
          href="#schaden"
          aria-label="Weiter zum Schadenformular"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Weiter</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm animate-bounce">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </section>

      {/* Farbverlauf vom dunklen Hero in den hellen Formularbereich, damit die
          Kante zwischen den beiden Flächen nicht hart abbricht. */}
      <div
        aria-hidden="true"
        className="h-28 md:h-36 bg-gradient-to-b from-[#050507] to-[#F8FAFC]"
      />

      {/* ============ SCHADEN MELDEN ============ */}
      <DamageFormSection />

      {/* ============ 01 · ABLAUF ============ */}
      <section id="vertrauen" className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <Kapitel num="01" label="So läuft es ab" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            In fünf Schritten zu Ihrem Geld.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Vom ersten Anruf bis zur Auszahlung durch die Versicherung. Sie müssen sich um nichts kümmern.
          </p>

          {/* Übersicht als Schrittleiste, nur auf größeren Bildschirmen */}
          <div className="hidden md:flex items-start justify-between max-w-2xl mx-auto mb-14" data-reveal>
            {schritte.map((s, i) => (
              <Fragment key={s.num}>
                <div className="flex flex-col items-center gap-2.5 w-[76px]">
                  <div className="w-10 h-10 rounded-full border border-[#E11D2F]/40 bg-[#E11D2F]/10 flex items-center justify-center font-display font-black text-[#E11D2F] text-[14px]">
                    {s.num}
                  </div>
                  <span className="text-[10.5px] font-bold tracking-[0.12em] text-white/45 uppercase text-center leading-tight">
                    {s.kurz}
                  </span>
                </div>
                {i < schritte.length - 1 && <span className="flex-1 h-px bg-white/12 mt-5" />}
              </Fragment>
            ))}
          </div>

          {/* Die fünf Schritte im Detail */}
          <div className="relative">
            {/* Durchgehende Linie hinter den Symbolen */}
            <span
              className="hidden sm:block absolute left-[27px] top-8 bottom-8 w-px bg-white/10"
              aria-hidden="true"
            />
            <ol className="space-y-4">
              {schritte.map(({ num, icon: Icon, title, zeit, text, chips }, i) => (
                <li
                  key={num}
                  className="relative flex gap-5 sm:gap-6"
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0A0A0D] border border-[#E11D2F]/30 items-center justify-center flex-shrink-0 relative z-10">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>

                  <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7 hover:border-white/20 transition-colors">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 mb-3">
                      <span className="font-display font-black text-[#E11D2F] text-[20px] leading-none">{num}</span>
                      <h3 className="font-display font-bold text-[19px] leading-none">{title}</h3>
                      <span className="text-[10.5px] font-bold tracking-[0.18em] text-white/35 uppercase">
                        {zeit}
                      </span>
                    </div>
                    <p className="text-white/55 text-[14.5px] leading-relaxed mb-4">{text}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {chips.map((c) => (
                        <span
                          key={c}
                          className="text-[11.5px] font-semibold text-white/45 bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="text-center mt-10" data-reveal>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[15px] px-7 py-3.5 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.3)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Mit Schritt 1 anfangen
            </a>
          </div>
        </div>
      </section>

      {/* ============ 02 · BEWERTUNGEN ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <Kapitel num="02" label="Google Bewertungen" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-10"
            data-reveal
          >
            Berlin vertraut uns. <span className="text-[#E11D2F]">{REVIEW_COUNT} Mal belegt.</span>
          </h2>

          <div className="flex flex-col items-center mb-12" data-reveal>
            <div className="flex items-end gap-2 mb-2">
              <span className="font-display font-black text-[64px] leading-none">5,0</span>
              <span className="text-white/40 text-[15px] mb-2">von 5,0</span>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#FBBC04] text-[#FBBC04]" />)}
            </div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-white/35 uppercase mb-5">
              Aus {REVIEW_COUNT} echten Google Bewertungen
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {reviewChips.map((c) => (
                <span key={c} className="text-[12px] font-semibold text-white/60 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg">
                  „{c}“
                </span>
              ))}
            </div>
          </div>

          {/* Sechs Bewertungen, Volltext. line-clamp kappt nur die Anzeige, der ganze
              Text steht im HTML — Crawler und KI-Systeme lesen ihn vollständig. */}
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.slice(0, 6).map(({ name, text, sterne, monat }, i) => (
              <figure
                key={name}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 flex flex-col"
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(sterne)].map((_, j) => <Star key={j} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />)}
                </div>
                <blockquote className="text-white/60 text-[13.5px] leading-relaxed mb-5 flex-1 whitespace-pre-line line-clamp-[9]">
                  „{text}“
                </blockquote>
                <figcaption className="text-[12px] font-bold tracking-[0.15em] text-white/70 uppercase">
                  {name}
                  <span className="block text-[11px] font-semibold tracking-normal normal-case text-white/35 mt-1">
                    {monat} · Google
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-8" data-reveal>
            <a
              href={GOOGLE_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/40 hover:text-white transition-colors underline underline-offset-4"
            >
              Alle {REVIEW_COUNT} Bewertungen auf Google lesen →
            </a>
          </div>
        </div>
      </section>

      {/* ============ 03 · EINBLICKE ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <Kapitel num="03" label="Einblicke" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            Kein anonymes Großbüro.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Ein eigenes Büro an der Prenzlauer Allee und ein Sachverständiger, der jeden Schaden selbst
            in Augenschein nimmt.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galerie.map(({ src, alt, label, ort, gross }, i) => (
              <figure
                key={src}
                className={`group relative rounded-xl overflow-hidden ${
                  gross ? "col-span-2 lg:col-span-2 h-[240px] md:h-[340px]" : "h-[170px] md:h-[240px]"
                }`}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  sizes={gross ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"}
                  quality={78}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <p className="text-[9.5px] font-bold tracking-[0.22em] text-white/55 uppercase mb-0.5">{ort}</p>
                  <p className={`font-display font-bold leading-tight ${gross ? "text-[20px]" : "text-[15px]"}`}>
                    {label}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 04 · LEISTUNGEN ============ */}
      <section id="leistungen" className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <Kapitel num="04" label="Leistungen" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            Sechs Leistungen. Ein Ziel:
            <br className="hidden md:block" />
            <span className="text-[#E11D2F]"> Ihr voller Anspruch.</span>
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Jeder Schaden ist anders. Wir wählen die Gutachtenart, die Ihre Ansprüche bestmöglich absichert,
            vom Parkrempler bis zum Totalschaden.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leistungen.map(({ icon: Icon, badge, tag, title, desc, href }, i) => {
              const inner = (
                <>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center group-hover:bg-[#E11D2F]/20 transition-colors">
                      <Icon size={20} className="text-[#E11D2F]" />
                    </div>
                    <span className="text-[10px] font-black tracking-[0.15em] text-[#E11D2F] bg-[#E11D2F]/10 border border-[#E11D2F]/25 px-2 py-1 rounded uppercase">
                      {tag}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 mb-1.5 uppercase">{badge}</p>
                  <h3 className="font-display font-bold text-[18px] mb-2">{title}</h3>
                  <p className="text-white/50 text-[13.5px] leading-relaxed">{desc}</p>
                  {href && (
                    <span className="block text-[12px] font-semibold text-white/30 group-hover:text-[#E11D2F] mt-4 transition-colors">
                      Mehr erfahren →
                    </span>
                  )}
                </>
              );
              const cls =
                "group bg-white/[0.03] border border-white/8 rounded-xl p-6 hover:border-[#E11D2F]/30 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 block";
              return href ? (
                <Link key={title} href={href} className={cls} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  {inner}
                </Link>
              ) : (
                <div key={title} className={cls} data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10" data-reveal>
            <p className="text-white/45 text-[14px] mb-4">
              Unsicher, welches Gutachten Sie brauchen? Wir sagen es Ihnen kostenlos.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[15px] px-7 py-3.5 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.3)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </section>

      {/* ============ 05 · WAS UNS TRÄGT ============ */}
      <section id="vorteile" className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <Kapitel num="05" label="Was uns trägt" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-14"
            data-reveal
          >
            Drei Sätze. Eine Haltung.
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {haltung.map(({ num, wort, satz, text }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-display font-black text-[#E11D2F]/40 text-[26px]">{num}</span>
                  <span className="text-[11px] font-black tracking-[0.3em] text-[#E11D2F] uppercase">{wort}</span>
                </div>
                <p className="font-display font-bold text-[19px] leading-snug mb-3">{satz}</p>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 06 · GEPRÜFTE KOMPETENZ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <Kapitel num="06" label="Geprüfte Kompetenz" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4"
            data-reveal
          >
            Echte Qualifikation. Nachprüfbar.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Kein Marketingversprechen, sondern eine unabhängig geprüfte Zertifizierung durch den TÜV Rheinland.
          </p>

          <div className="bg-white/[0.03] border border-white/8 rounded-xl p-7 md:p-9 grid md:grid-cols-[auto,1fr] gap-7 items-start" data-reveal>
            <div className="relative w-[110px] h-[110px] rounded-xl overflow-hidden border border-white/10 mx-auto md:mx-0">
              <Image src="/inhaber2.jpg" alt="Atakan Arslan bei der Fahrzeugbegutachtung" fill className="object-cover object-[center_20%]" sizes="110px" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[22px] mb-1">Atakan Arslan</h3>
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/35 uppercase mb-5">
                Inhaber und Kfz Sachverständiger
              </p>
              <ul className="space-y-3">
                {[
                  ["TÜV Rheinland zertifiziert", "Unabhängig geprüfte Qualifikation, gültig bis 18.12.2028"],
                  ["Rechtssichere Gutachten", "Von deutschen Versicherungen im Regelfall anerkannt und vor Gericht verwertbar"],
                  ["Beratung in drei Sprachen", "Deutsch, Türkisch und Englisch"],
                ].map(([t, sub]) => (
                  <li key={t} className="flex items-start gap-3">
                    <ShieldCheck size={16} className="text-[#E11D2F] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[14px] font-semibold text-white">{t}</p>
                      <p className="text-[12.5px] text-white/40">{sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 · FAQ ============ */}
      <section id="faq" className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <Kapitel num="07" label="FAQ" />
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12"
            data-reveal
          >
            Klare Antworten, ehrlich erklärt.
          </h2>
          <FaqNeu />
        </div>
      </section>

      {/* ============ ABSCHLUSS ============ */}
      <section id="kontakt" className="relative px-5 py-24 md:py-32 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E11D2F]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black tracking-tight text-[clamp(30px,5.5vw,54px)] leading-[1.05] mb-5" data-reveal>
            Unfall gehabt?
            <br />
            <span className="text-[#E11D2F]">Rufen Sie jetzt an.</span>
          </h2>
          <p className="text-white/50 text-[16px] mb-9 leading-relaxed" data-reveal>
            Ein Anruf kostet nichts und verpflichtet zu nichts. Sie erfahren sofort, welche Ansprüche Sie
            haben. Rund um die Uhr, auch am Wochenende.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7" data-reveal>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[17px] px-9 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.4)] transition-all hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Jetzt anrufen
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FAF54] text-white font-bold text-[17px] px-9 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Kostenlos beraten lassen
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 text-[12px] text-white/35" data-reveal>
            <span className="flex items-center gap-1.5"><Clock size={12} /> Rund um die Uhr erreichbar</span>
            <span className="flex items-center gap-1.5"><MapPin size={12} /> Prenzlauer Allee 88</span>
          </div>
        </div>
      </section>

      {/* ============ STANDORTKARTE ============ */}
      {/* Google-Maps-Einbettung des Unternehmenseintrags (nicht nur der Adresse):
          verknüpft die Seite mit dem Profil, auf das auch sameAs im Schema zeigt.

          Zoom und Mittelpunkt bleiben bewusst so, wie Google sie im
          Einbettungscode ausgegeben hat (auf Wunsch von Atakan, 18.09.2026).

          Einzige Abweichung: die festen 600x450 sind durch volle Breite mit
          festem Seitenverhältnis ersetzt — der starre Rahmen erzeugt auf dem
          Handy sonst waagerechtes Scrollen. loading="lazy" hält den iframe
          aus dem LCP heraus. */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(24px,4vw,38px)] leading-[1.1] mb-3"
            data-reveal
          >
            Sie finden uns in Prenzlauer Berg.
          </h2>
          <p className="text-white/45 text-[15.5px] leading-relaxed text-center max-w-xl mx-auto mb-8" data-reveal>
            Prenzlauer Allee 88, 10405 Berlin — wenige Minuten vom S-Bahnhof Prenzlauer Allee. In den
            meisten Fällen kommen aber wir zu Ihnen.
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] sm:aspect-[16/9]" data-reveal>
            <iframe
              title="Standort von Kfz Gutachten Prenzl, Prenzlauer Allee 88, 10405 Berlin"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2641112.8513557096!2d12.453535365793078!3d49.725639543119954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24ffc02e346f60e9%3A0x46f58afc3e81d2e7!2sKfz%20Gutachten%20Prenzl%20-%20Sachverst%C3%A4ndigenb%C3%BCro!5e0!3m2!1sde!2sde!4v1789750190659!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
