import Image from "next/image";
import Link from "next/link";
import {
  Phone, MessageCircle, ShieldCheck, Star, MapPin, UserCheck, Camera, Handshake,
  ChevronDown, Check, FileSearch,
} from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import JsonLd from "@/components/neu/json-ld";
import StandortKarte from "@/components/standort-karte";
import UnfallLeadForm from "@/components/unfall-lead-form";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT, REVIEW_RATING } from "@/lib/contact";
import { REVIEWS } from "@/lib/reviews";
import { bezirkContent } from "@/lib/bezirk-content";
import { pageMetadata, breadcrumbLd, faqLd, serviceLd, SITE_URL, PERSON_ID, BUSINESS_ID } from "@/lib/seo";

const PATH = "/unfallgutachten-berlin";
const UPDATED = "2026-11-21";

export const metadata = pageMetadata({
  title: "Unabhängiger Kfz-Gutachter Berlin | Unfallgutachten nach unverschuldetem Unfall",
  description:
    "Unverschuldeter Unfall in Berlin? Gutachten Prenzl erstellt ein unabhängiges Schadengutachten und unterstützt Sie bei der Dokumentation Ihres Fahrzeugschadens. Jetzt Kontakt aufnehmen.",
  path: PATH,
});

const RATING = REVIEW_RATING.toFixed(1).replace(".", ",");

// Gleicher Link wie auf der Startseite (app/page.tsx)
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Kfz+Gutachten+Prenzl&query_place_id=ChIJ6WBvNC7A_yQR59KBPvyK9UY";

/* ---------- Inhalte ---------- */

const heroChecks = [
  "Unabhängig von der Versicherung",
  "Wir kommen zu Ihrem Fahrzeug",
  "Ein fester Ansprechpartner",
  "TÜV Rheinland zertifiziert",
];

const positionen = [
  "Reparaturkosten",
  "Wiederbeschaffungswert",
  "Restwert",
  "Merkantile Wertminderung",
  "Nutzungsausfall",
  "Weitere Positionen je nach Fall",
];

const vorteile = [
  { icon: UserCheck, titel: "Unabhängig", text: "Wir arbeiten für Sie, nicht für die gegnerische Versicherung und nicht für eine Werkstatt." },
  { icon: Camera, titel: "Gründlich", text: "Fotos, Lackschichtmessung und Prüfung der betroffenen Bauteile, auch der verdeckten." },
  { icon: MapPin, titel: "Mobil in Berlin", text: "Nach Absprache dort, wo Ihr Fahrzeug steht: zu Hause, bei der Arbeit oder in der Werkstatt." },
  { icon: Handshake, titel: "Persönlich", text: "Vom ersten Anruf bis zum fertigen Gutachten sprechen Sie mit derselben Person." },
  { icon: FileSearch, titel: "Nachvollziehbar", text: "Jede Position ist begründet und mit Fotos belegt." },
];

const schritte = [
  { titel: "Kontakt aufnehmen", text: "Anrufen, WhatsApp oder Formular. Erzählen Sie kurz, was passiert ist." },
  { titel: "Termin vereinbaren", text: "Wir stimmen Ort und Uhrzeit ab und kommen zu Ihrem Fahrzeug." },
  { titel: "Gutachten erhalten", text: "Wir nehmen den Schaden vor Ort auf und erstellen daraus das Gutachten mit allen Fotos." },
];

const galerie = [
  { src: "/foto5.jpg", alt: "Beschädigte Fahrzeugtür eines Mercedes, davor der Ausrüstungskoffer von Gutachten Prenzl", label: "Schadenaufnahme vor Ort", gross: true },
  { src: "/Lackmessung.JPG", alt: "Lackschichtdickenmessung an einer Fahrzeugtür", label: "Lackschichtmessung" },
  { src: "/foto7.jpg", alt: "Weißer BMW mit geöffneter Motorhaube und freigelegtem Frontbereich in der Werkstatt", label: "Verdeckte Schäden" },
  { src: "/foto10.jpg", alt: "Fahrzeug mit Frontschaden und geöffneter Motorhaube in der Werkstatt", label: "Frontschaden" },
  { src: "/foto6.jpg", alt: "Ladengeschäft von Gutachten Prenzl an der Prenzlauer Allee in Berlin", label: "Unser Büro" },
];

const hinweise = [
  "Unfallstelle und Schäden fotografieren, auch aus etwas Entfernung.",
  "Name, Kennzeichen und Versicherung des Gegners sowie Zeugen notieren.",
  "Vor Ort nichts unterschreiben und nicht vor der Begutachtung reparieren lassen.",
  "Den Schaden unabhängig aufnehmen lassen, bei Rechtsfragen einen Anwalt fragen.",
];

const faq = [
  {
    q: "Wann brauche ich einen unabhängigen Gutachter?",
    a: "Vor allem dann, wenn ein anderer den Unfall verursacht hat und der Schaden über eine Kleinigkeit hinausgeht. Als grober Richtwert gelten etwa 750 bis 1.000 Euro. Darunter kann ein Kostenvoranschlag reichen. Wie hoch der Schaden wirklich ist, sieht man von außen aber oft nicht, gerade bei Sensoren hinter dem Stoßfänger. Im Zweifel klären wir das kurz am Telefon.",
  },
  {
    q: "Wer bezahlt das Gutachten?",
    a: "Bei einem unverschuldeten Unfall gehören die erforderlichen Gutachterkosten grundsätzlich zum Schaden, den die Haftpflichtversicherung des Unfallverursachers ersetzen muss. Ob und in welcher Höhe sie zahlt, hängt vom Einzelfall ab, zum Beispiel von der Haftungsfrage und der Höhe des Schadens. Häufig rechnen wir direkt mit der gegnerischen Versicherung ab. Wie das bei Ihnen aussieht, besprechen wir vor dem Termin.",
  },
  {
    q: "Muss ich selbst zur Besichtigung fahren?",
    a: "Nein. Wir kommen nach Terminvereinbarung zu Ihrem Fahrzeug, zum Beispiel zu Ihnen nach Hause, zur Arbeit oder in die Werkstatt. Wenn Sie lieber vorbeikommen, geht das auch in unseren Büros in Prenzlauer Berg oder Schöneweide.",
  },
  {
    q: "Was ist, wenn das Fahrzeug nicht fahrbereit ist?",
    a: "Dann besichtigen wir es dort, wo es steht, etwa beim Abschleppdienst, auf einem Verwahrplatz oder in der Werkstatt. Sagen Sie uns bei der Anfrage einfach, wo sich das Fahrzeug befindet.",
  },
  {
    q: "Kann ich einen eigenen Sachverständigen wählen?",
    a: "Ja. Nach einem unverschuldeten Unfall dürfen Sie den Sachverständigen grundsätzlich selbst aussuchen. Einen Gutachter, den die gegnerische Versicherung schickt, müssen Sie nicht akzeptieren. Das ist eine allgemeine Information und keine Rechtsberatung im Einzelfall.",
  },
  {
    q: "Wie schnell ist ein Termin möglich?",
    a: "Das hängt von der Auslastung ab. Oft klappt ein Termin am selben oder am nächsten Tag. Eine feste Zusage geben wir Ihnen am Telefon, sobald wir wissen, wo das Fahrzeug steht.",
  },
  {
    q: "Was passiert nach Erstellung des Gutachtens?",
    a: "Sie bekommen das Gutachten mit allen Fotos. Auf Wunsch geht es auch direkt an die gegnerische Versicherung oder an Ihren Anwalt. Kürzt die Versicherung einzelne Positionen, können wir technisch dazu Stellung nehmen. Rechtliche Schritte übernimmt ein Anwalt.",
  },
];

// Echte Google-Bewertungen, wortgleich aus lib/reviews.ts. Ausgewählt, weil sie den Unfallablauf beschreiben.
const bewertungen = ["Joël Maxim", "Anton Phan", "Valerie Menzel"]
  .map((n) => REVIEWS.find((r) => r.name === n))
  .filter((r): r is (typeof REVIEWS)[number] => Boolean(r));

/* ---------- Bausteine (Stil wie Startseite) ---------- */

function Kapitel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
      <span className="font-display font-black text-[#E11D2F] text-[15px]">{num}</span>
      <span className="text-[12px] font-bold tracking-[0.3em] text-white/65 uppercase">{label}</span>
    </div>
  );
}

const h2 = "font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4";
const intro = "text-white/75 text-[16px] text-center max-w-xl mx-auto leading-relaxed";
const section = "px-5 py-20 md:py-24 border-t border-white/10";
const btnRot =
  "inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.35)] transition-all hover:-translate-y-0.5";
const btnGlas =
  "inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5";

function GoogleBadge() {
  return (
    <a
      href={GOOGLE_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5 bg-white/[0.06] hover:bg-white/[0.12] border border-[#FBBC04]/25 hover:border-[#FBBC04]/45 backdrop-blur-sm px-3.5 py-2.5 rounded-lg shadow-md shadow-black/30 transition-all max-w-full"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      <span className="flex items-center gap-2">
        <span className="font-display font-black text-white text-[16px] leading-none">{RATING}</span>
        <span className="flex gap-0.5" aria-label={`${RATING} von 5 Sternen`}>
          {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-[#FBBC04] text-[#FBBC04]" aria-hidden />)}
        </span>
      </span>
      <span className="text-[13.5px] text-white/85 sm:border-l sm:border-white/15 sm:pl-3">{REVIEW_COUNT} Google Bewertungen</span>
    </a>
  );
}

export default function UnfallgutachtenBerlin() {
  return (
    <div className="min-h-screen bg-[#050507] text-white overflow-x-hidden pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${SITE_URL}${PATH}#webpage`,
            url: `${SITE_URL}${PATH}`,
            name: "Unabhängiger Kfz-Gutachter Berlin: Unfallgutachten nach unverschuldetem Unfall",
            inLanguage: "de-DE",
            dateModified: UPDATED,
            isPartOf: { "@id": SITE_URL },
            about: { "@id": BUSINESS_ID },
            author: { "@id": PERSON_ID },
          },
          serviceLd({
            name: "Unfallgutachten Berlin",
            description: "Unabhängiges Schadengutachten nach einem unverschuldeten Verkehrsunfall in Berlin, mit Besichtigung vor Ort.",
            path: PATH,
            serviceType: "Kfz-Schadengutachten",
            areaServed: [{ "@type": "City", name: "Berlin" }],
          }),
          faqLd(faq),
          breadcrumbLd([{ name: "Unfallgutachten Berlin", path: PATH }]),
        ]}
      />
      <NavbarNeu />

      <main>
        {/* ============ HERO (Aufbau wie Startseite) ============ */}
        <section className="relative px-5 pt-[clamp(6.5rem,15svh,9rem)] pb-16 min-h-[100svh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="hidden lg:block absolute left-0 top-0 h-full w-[46%] hero-fade-left opacity-[0.72]">
              <Image src="/Lackmessung.JPG" alt="" fill className="object-cover object-[60%_center] blur-[3px] scale-110" sizes="46vw" quality={60} />
            </div>
            <div className="absolute inset-y-0 right-0 w-full lg:w-[46%] opacity-[0.6] lg:opacity-[0.72] hero-fade-bottom lg:hero-fade-right">
              <Image src="/inhaber2.jpg" alt="" fill priority className="object-cover object-[center_22%] blur-[3px] scale-110" sizes="(max-width: 1024px) 100vw, 46vw" quality={60} />
            </div>
            <div className="absolute inset-0 bg-[#050507]/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507]" />
          </div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E11D2F]/8 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative w-full max-w-4xl mx-auto text-center">
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.3em] text-white/70 animate-fade-up">
              <span className="text-[#E11D2F]">Unfallgutachten</span> in Berlin
            </p>
            <h1 className="font-display font-black tracking-tight leading-[1.05] text-[clamp(38px,7vw,72px)] mb-6 animate-fade-up">
              Unverschuldeter Unfall?{" "}
              <span className="block text-[#E11D2F]">Sichern Sie Ihre Ansprüche.</span>
            </h1>
            <p className="text-white/80 text-[16.5px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "80ms" }}>
              Ihr unabhängiger Kfz-Sachverständiger in Berlin. Wir dokumentieren Ihren Unfallschaden professionell
              und kommen nach Terminvereinbarung direkt zu Ihrem Fahrzeug.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-start w-fit mx-auto gap-x-9 gap-y-3 mb-9 animate-fade-up" style={{ animationDelay: "140ms" }}>
              {heroChecks.map((t) => (
                <span key={t} className="flex items-center gap-2.5 text-[15.5px] font-medium text-white/85">
                  <Check size={18} className="text-[#22c55e] stroke-[3] flex-shrink-0" aria-hidden />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <a href={PHONE_HREF} className={btnRot}>
                <Phone size={17} aria-hidden /> Gutachter kontaktieren
              </a>
              <a href="#kontakt" className={btnGlas}>Rückruf anfordern</a>
            </div>

            <div className="flex flex-col items-center gap-4 animate-fade-up" style={{ animationDelay: "260ms" }}>
              <GoogleBadge />
              <p className="text-[13.5px] text-white/65 max-w-md">
                Unser Angebot richtet sich insbesondere an Unfallgeschädigte nach einem unverschuldeten Verkehrsunfall.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 01 · WARUM ============ */}
        <section className={section}>
          <div className="max-w-4xl mx-auto">
            <Kapitel num="01" label="Warum ein Gutachten" />
            <h2 className={h2} data-reveal>Warum ein unabhängiges Schadengutachten?</h2>
            <p className={`${intro} mb-10`} data-reveal>
              Die Versicherung des Verursachers muss Ihren Schaden ersetzen. Was genau dazugehört, hält ein
              unabhängiges Unfallgutachten fest. Je nach Fall zum Beispiel:
            </p>

            <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
              <div className="relative min-h-[260px] rounded-xl overflow-hidden border border-white/10" data-reveal>
                <Image src="/foto10.jpg" alt="Fahrzeug mit Frontschaden und geöffneter Motorhaube in der Werkstatt" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" quality={75} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-display font-bold text-[18px]">Was die Versicherung zahlen muss, steht im Gutachten.</p>
              </div>
              <ul className="grid grid-cols-1 gap-2.5" data-reveal>
                {positionen.map((p) => (
                  <li key={p} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15.5px] font-semibold">
                    <Check size={18} className="text-[#22c55e] stroke-[3] flex-shrink-0" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6" data-reveal>
              <p className="font-bold text-white mb-1.5">Und die Gutachterkosten?</p>
              <p className="text-white/75 text-[15px] leading-relaxed">
                Bei einem unverschuldeten Unfall können Sie die erforderlichen Gutachterkosten grundsätzlich gegenüber
                der gegnerischen Versicherung geltend machen. Ob sie vollständig übernommen werden, hängt vom Einzelfall
                ab, etwa von der Haftungsfrage und der Schadenhöhe. Bei sehr kleinen Schäden kann ein Kostenvoranschlag
                reichen. Das klären wir vorab mit Ihnen.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 02 · VORTEILE ============ */}
        <section className={section}>
          <div className="max-w-6xl mx-auto">
            <Kapitel num="02" label="Unsere Hilfe" />
            <h2 className={h2} data-reveal>Wir helfen nach einem unverschuldeten Unfall</h2>
            <p className={`${intro} mb-12`} data-reveal>Sie kümmern sich um sich. Wir übernehmen den technischen Teil.</p>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {vorteile.map(({ icon: Icon, titel, text }, i) => (
                <li key={titel} className="rounded-xl border border-white/10 bg-white/[0.04] p-5" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#E11D2F]/12">
                    <Icon size={21} className="text-[#E11D2F]" aria-hidden />
                  </span>
                  <h3 className="font-display font-bold text-[17px] mb-1">{titel}</h3>
                  <p className="text-white/70 text-[14.5px] leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ 03 · EINBLICKE ============ */}
        <section className={section}>
          <div className="max-w-6xl mx-auto">
            <Kapitel num="03" label="Einblicke" />
            <h2 className={h2} data-reveal>So sieht unsere Arbeit aus</h2>
            <p className={`${intro} mb-12`} data-reveal>Echte Fotos aus echten Begutachtungen, keine Bilder aus der Datenbank.</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {galerie.map(({ src, alt, label, gross }, i) => (
                <figure
                  key={src}
                  className={`group relative rounded-xl overflow-hidden ${gross ? "col-span-2 h-[240px] md:h-[340px]" : "h-[170px] md:h-[240px]"}`}
                  data-reveal
                  style={{ transitionDelay: `${(i % 3) * 70}ms` }}
                >
                  <Image src={src} alt={alt} fill className="object-cover group-hover:scale-[1.04] transition-transform duration-700" sizes={gross ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 50vw, 33vw"} quality={75} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <figcaption className={`absolute bottom-4 left-4 right-4 font-display font-bold leading-tight ${gross ? "text-[20px]" : "text-[15px]"}`}>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 04 · ABLAUF ============ */}
        <section className={section}>
          <div className="max-w-5xl mx-auto">
            <Kapitel num="04" label="Ablauf" />
            <h2 className={h2} data-reveal>So einfach läuft es ab</h2>
            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {schritte.map(({ titel, text }, i) => (
                <li key={titel} className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6 pt-8" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#E11D2F] font-display font-black text-[18px] shadow-[0_6px_20px_rgba(225,29,47,0.4)]" aria-hidden>
                    {i + 1}
                  </span>
                  <h3 className="font-display font-bold text-[18px] mb-1.5">{titel}</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center" data-reveal>
              <a href={PHONE_HREF} className={btnRot}><Phone size={17} aria-hidden /> Jetzt anrufen</a>
              <a href="#kontakt" className={btnGlas}>Rückruf anfordern</a>
            </div>
          </div>
        </section>

        {/* ============ 05 · NACH DEM UNFALL ============ */}
        <section className={section}>
          <div className="max-w-3xl mx-auto">
            <Kapitel num="05" label="Nach dem Unfall" />
            <h2 className={h2} data-reveal>Was sollten Sie nach einem Unfall beachten?</h2>
            <ul className="mt-10 space-y-2.5" data-reveal>
              {hinweise.map((h, i) => (
                <li key={h} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
                  <span className="font-display font-black text-[#E11D2F] text-[15px] leading-6">0{i + 1}</span>
                  <span className="text-white/85 text-[15.5px] leading-6">{h}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-[13px] text-white/50 leading-relaxed">
              Allgemeine Hinweise, keine Rechtsberatung. Mehr im Ratgeber{" "}
              <Link href="/blog/was-tun-nach-unfall-berlin" className="underline hover:text-white">Was tun nach einem Unfall?</Link>
            </p>
          </div>
        </section>

        {/* ============ 06 · VERTRAUEN ============ */}
        <section className={section}>
          <div className="max-w-5xl mx-auto">
            <Kapitel num="06" label="Geprüfte Kompetenz" />
            <h2 className={h2} data-reveal>Wer Ihr Fahrzeug begutachtet</h2>
            <p className={`${intro} mb-12`} data-reveal>Kein Callcenter und kein wechselnder Außendienst: Sie sprechen direkt mit Atakan Arslan.</p>

            <div className="bg-white/[0.05] border border-white/12 rounded-xl p-6 md:p-9 grid md:grid-cols-[auto,1fr] gap-7 items-start" data-reveal>
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 mx-auto md:mx-0 md:w-[240px]">
                <Image src="/inhaber2.jpg" alt="Atakan Arslan bei der Fahrzeugbegutachtung" fill className="object-cover object-[center_20%]" sizes="280px" />
              </div>
              <div>
                <h3 className="font-display font-bold text-[24px] mb-1">Atakan Arslan</h3>
                <p className="text-[12px] font-bold tracking-[0.2em] text-white/60 uppercase mb-5">Inhaber und Kfz-Sachverständiger</p>
                <ul className="space-y-3 mb-6">
                  {[
                    ["TÜV Rheinland zertifiziert", "Zertifikat-ID 0217466029, gültig bis 18.12.2028"],
                    ["Masterabschluss", "Abgeschlossenes Masterstudium"],
                    ["Zwei Büros in Berlin", "Prenzlauer Allee 88 und Brückenstraße 6"],
                  ].map(([t, sub]) => (
                    <li key={t} className="flex items-start gap-3">
                      <ShieldCheck size={17} className="text-[#E11D2F] mt-0.5 flex-shrink-0" aria-hidden />
                      <div>
                        <p className="text-[15px] font-semibold text-white">{t}</p>
                        <p className="text-[13.5px] text-white/65">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <Image src="/tuev-zertifikat.png" alt="TÜV Rheinland Zertifikat Kfz-Sachverständiger" width={220} height={81} className="rounded-md bg-white p-1.5" />
                  <Link href="/qualifikationen" className="text-[14px] font-semibold text-white/80 underline underline-offset-4 hover:text-white">Alle Qualifikationen</Link>
                </div>
              </div>
            </div>

            <div className="mt-14 flex flex-col items-center gap-3 mb-8" data-reveal>
              <h3 className="font-display font-bold text-[22px] text-center">Was Kunden bei Google schreiben</h3>
              <GoogleBadge />
            </div>
            <ul className="grid gap-3 md:grid-cols-3">
              {bewertungen.map((r, i) => (
                <li key={r.name} className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-6" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <span className="flex gap-0.5 mb-3" aria-label={`${r.sterne} von 5 Sternen`}>
                    {[...Array(r.sterne)].map((_, k) => <Star key={k} size={15} className="fill-[#FBBC04] text-[#FBBC04]" aria-hidden />)}
                  </span>
                  <blockquote className="flex-1 whitespace-pre-line text-white/80 text-[15px] leading-relaxed line-clamp-6">{r.text}</blockquote>
                  <p className="mt-4 text-[14px] font-semibold">{r.name} <span className="font-normal text-white/50">· {r.monat}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ 07 · FAQ ============ */}
        <section className={section}>
          <div className="max-w-3xl mx-auto">
            <Kapitel num="07" label="Fragen" />
            <h2 className={h2} data-reveal>Häufige Fragen</h2>
            <div className="mt-10 space-y-2.5">
              {faq.map(({ q, a }) => (
                <details key={q} className="group rounded-xl border border-white/10 bg-white/[0.04] open:bg-white/[0.06]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-semibold text-[16px] text-white">{q}</h3>
                    <ChevronDown size={20} className="flex-shrink-0 text-white/50 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="px-5 pb-5 text-white/75 text-[15px] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============ KONTAKT ============ */}
        <section id="kontakt" className={`${section} scroll-mt-20`}>
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr] items-start">
            <div className="text-center md:text-left">
              <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,40px)] leading-[1.08] mb-4">Rückruf anfordern</h2>
              <p className="text-white/75 text-[16px] leading-relaxed mb-7">
                Name und Telefonnummer reichen. Wir rufen zurück und besprechen kurz, ob und wie wir helfen können.
              </p>
              <div className="relative hidden md:block aspect-[4/3] rounded-xl overflow-hidden border border-white/10 mb-6">
                <Image src="/foto6.jpg" alt="Büro von Gutachten Prenzl an der Prenzlauer Allee" fill className="object-cover" sizes="40vw" />
              </div>
              <p className="text-white/60 text-[14px] mb-3">Lieber direkt?</p>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3">
                <a href={PHONE_HREF} className={btnRot}><Phone size={17} aria-hidden /> {PHONE_DISPLAY}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnGlas}>
                  <MessageCircle size={17} className="text-[#25D366]" aria-hidden /> WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/12 bg-white/[0.04] p-5 md:p-8">
              <UnfallLeadForm />
            </div>
          </div>
        </section>

        {/* ============ ABSCHLUSS ============ */}
        <section className="relative px-5 py-24 md:py-28 border-t border-white/10 overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <Image src="/foto5.jpg" alt="" fill className="object-cover opacity-25 blur-[2px] scale-105" sizes="100vw" quality={50} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#050507]/60 to-[#050507]" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <h2 className="font-display font-black tracking-tight text-[clamp(28px,5vw,48px)] leading-[1.08] mb-8">
              Sie hatten einen unverschuldeten Unfall?{" "}
              <span className="block text-[#E11D2F]">Lassen Sie Ihren Schaden unabhängig dokumentieren.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PHONE_HREF} className={btnRot}><Phone size={17} aria-hidden /> Anrufen</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnGlas}>
                <MessageCircle size={17} className="text-[#25D366]" aria-hidden /> WhatsApp
              </a>
              <a href="#kontakt" className={btnGlas}>Zum Formular</a>
            </div>
          </div>
        </section>

        {/* Interne Links: tragen das Ranking der Seite, bitte behalten */}
        <section className="px-5 py-12 border-t border-white/10">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">Weiterlesen</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { href: "/kosten-kfz-gutachten-berlin", label: "Was kostet ein Gutachten?" },
                { href: "/nutzungsausfall-tabelle-berlin", label: "Nutzungsausfall-Tabelle" },
                { href: "/eigener-gutachter-oder-versicherungsgutachter", label: "Eigener Gutachter vs. Versicherung" },
                { href: "/wertminderung", label: "Wertminderung" },
                { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
                { href: "/parkschaden-gutachten-berlin", label: "Parkschaden" },
                { href: "/heckauffahrunfall-berlin", label: "Heckauffahrunfall" },
                { href: "/versicherung-kuerzt-gutachten", label: "Versicherung kürzt das Gutachten" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="rounded-full border border-white/10 px-3.5 py-2 text-[13px] text-white/65 hover:border-white/30 hover:text-white">{label}</Link>
              ))}
            </div>
            <h2 className="mt-10 mb-4 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white/50">Unfallgutachten in Ihrem Bezirk</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {bezirkContent.map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} className="rounded-full border border-white/10 px-3.5 py-2 text-[13px] text-white/65 hover:border-white/30 hover:text-white">
                  Unfallgutachten in {b.h1Ort ?? b.nameShort}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StandortKarte variant="dark" />
      </main>

      <FooterNeu />

      {/* Mobile Sticky-Bar. Deckender Hintergrund bis in den Safe-Area-Bereich, sonst scheint
          unter Safaris schwebender Adressleiste Text durch. Klicks zählt ConversionTracking global. */}
      <nav
        aria-label="Schnellkontakt"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#050507] px-3 pt-2.5 md:hidden"
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      >
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-lg bg-[#E11D2F] py-3.5 text-[16px] font-bold text-white">
          <Phone size={18} aria-hidden /> Anrufen
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 text-[16px] font-bold text-[#06210f]">
          <MessageCircle size={18} aria-hidden /> WhatsApp
        </a>
      </nav>
    </div>
  );
}
