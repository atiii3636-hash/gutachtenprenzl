import Image from "next/image";
import Link from "next/link";
import {
  Phone, MessageCircle, ShieldCheck, Star, MapPin, UserCheck, FileSearch, Camera,
  ClipboardList, Handshake, ChevronDown, GraduationCap, Info,
} from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
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

/* ---------- Inhalte ---------- */

const positionen = [
  { titel: "Reparaturkosten", text: "Was die fachgerechte Reparatur kostet, kalkuliert nach Herstellervorgaben." },
  { titel: "Wiederbeschaffungswert", text: "Was ein vergleichbares Fahrzeug vor dem Unfall gekostet hätte. Wichtig, wenn sich die Reparatur nicht mehr lohnt." },
  { titel: "Restwert", text: "Was das beschädigte Fahrzeug noch wert ist." },
  { titel: "Merkantile Wertminderung", text: "Der Wertverlust, weil Ihr Auto ab jetzt als Unfallwagen gilt." },
  { titel: "Weitere Positionen", text: "Zum Beispiel Nutzungsausfall, Reparaturdauer oder Abschleppkosten, wenn sie in Ihrem Fall anfallen." },
];

const vorteile = [
  { icon: UserCheck, titel: "Unabhängig", text: "Wir arbeiten für Sie, nicht für die Versicherung des Unfallgegners und nicht für eine Werkstatt." },
  { icon: Camera, titel: "Gründliche Schadenaufnahme", text: "Fotos, Lackschichtmessung, Prüfung der betroffenen Bauteile und Fahrzeugdaten." },
  { icon: MapPin, titel: "Wir kommen zu Ihnen", text: "Nach Absprache dorthin, wo Ihr Fahrzeug steht: vor der Haustür, in der Werkstatt oder auf dem Firmenparkplatz, in allen Berliner Bezirken." },
  { icon: Handshake, titel: "Ein fester Ansprechpartner", text: "Sie sprechen vom ersten Anruf bis zum fertigen Gutachten mit derselben Person." },
  { icon: FileSearch, titel: "Nachvollziehbares Gutachten", text: "Jede Position ist begründet und mit Fotos belegt, damit die Versicherung sie prüfen kann." },
];

const schritte = [
  { titel: "Kontakt aufnehmen", text: "Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular. Schildern Sie kurz, was passiert ist." },
  { titel: "Termin vereinbaren", text: "Wir stimmen Ort und Uhrzeit für die Besichtigung mit Ihnen ab und kommen zu Ihrem Fahrzeug." },
  { titel: "Schaden dokumentieren, Gutachten erstellen", text: "Wir nehmen den Schaden vor Ort auf und erstellen daraus das Gutachten. Sie bekommen es zusammen mit den Fotos." },
];

const hinweise = [
  { titel: "Schaden dokumentieren", text: "Fotografieren Sie die Unfallstelle, die Endposition der Fahrzeuge und alle Schäden, auch aus etwas Entfernung." },
  { titel: "Daten sichern", text: "Notieren Sie Name, Anschrift, Kennzeichen und Versicherung des Unfallgegners sowie Kontaktdaten von Zeugen." },
  { titel: "Nichts vorschnell unterschreiben", text: "Ein Schuldanerkenntnis vor Ort, eine Reparatur ohne Begutachtung oder ein Restwertangebot der Gegenseite können Ihnen später fehlen." },
  { titel: "Unabhängig beraten lassen", text: "Lassen Sie den Schaden von einem unabhängigen Sachverständigen aufnehmen. Bei rechtlichen Fragen hilft ein Anwalt für Verkehrsrecht." },
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
const bewertungen = ["Joël Maxim", "Valerie Menzel", "Anton Phan"]
  .map((n) => REVIEWS.find((r) => r.name === n))
  .filter((r): r is (typeof REVIEWS)[number] => Boolean(r));

/* ---------- Bausteine ---------- */

const btnPrimary =
  "inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#E11D2F] px-7 py-4 text-[17px] font-bold text-white shadow-lg shadow-[#E11D2F]/25 transition-colors hover:bg-[#B91C1C]";
const btnSecondary =
  "inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/25 px-7 py-4 text-[17px] font-bold text-white transition-colors hover:bg-white/10";
const btnWhatsApp =
  "inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-[17px] font-bold text-[#06210f] transition-colors hover:bg-[#1fb857]";
const h2 = "font-display font-black text-[28px] md:text-4xl text-white leading-tight tracking-tight mb-4";
const lead = "text-white/70 text-[16px] md:text-[17px] leading-relaxed";

export default function UnfallgutachtenBerlin() {
  return (
    <div className="min-h-screen bg-[#050507] text-white pb-20 md:pb-0">
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
      <Breadcrumb items={[{ name: "Unfallgutachten Berlin", href: PATH }]} />

      <main>
        {/* 1 · Hero */}
        <section className="px-5 pt-6 pb-14 md:pt-10 md:pb-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="mb-4 text-[13px] font-bold uppercase tracking-widest text-[#E11D2F]">
                Unfallgutachten in Berlin
              </p>
              <h1 className="font-display font-black text-[38px] leading-[1.08] tracking-tight md:text-6xl mb-5">
                Unverschuldeter Unfall? Sichern Sie Ihre Ansprüche.
              </h1>
              <p className={`${lead} mb-7 max-w-xl`}>
                Ihr unabhängiger Kfz-Sachverständiger in Berlin. Wir dokumentieren Ihren Unfallschaden
                professionell und kommen nach Terminvereinbarung direkt zu Ihrem Fahrzeug.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row mb-5">
                <a href={PHONE_HREF} className={btnPrimary}>
                  <Phone size={20} aria-hidden /> Gutachter kontaktieren
                </a>
                <a href="#kontakt" className={btnSecondary}>
                  Rückruf anfordern
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[16px] mb-7">
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#E11D2F]">
                  <Phone size={17} className="text-[#E11D2F]" aria-hidden /> {PHONE_DISPLAY}
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#25D366]">
                  <MessageCircle size={17} className="text-[#25D366]" aria-hidden /> WhatsApp schreiben
                </a>
              </div>

              <p className="flex gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-[14px] leading-relaxed text-white/75 max-w-xl">
                <Info size={18} className="mt-0.5 flex-shrink-0 text-white/50" aria-hidden />
                <span>
                  Unser Angebot richtet sich insbesondere an Unfallgeschädigte nach einem unverschuldeten
                  Verkehrsunfall. Wir sind keine Werkstatt und reparieren keine Fahrzeuge.
                </span>
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-white/80">
                <li className="inline-flex items-center gap-2"><ShieldCheck size={18} className="text-[#E11D2F]" aria-hidden /> TÜV Rheinland zertifiziert</li>
                <li className="inline-flex items-center gap-2"><Star size={18} className="text-[#fbbf24]" aria-hidden /> {RATING} Sterne aus {REVIEW_COUNT} Google-Bewertungen</li>
                <li className="inline-flex items-center gap-2"><MapPin size={18} className="text-[#E11D2F]" aria-hidden /> Besichtigung in ganz Berlin</li>
              </ul>
            </div>

            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 md:block">
              <Image
                src="/inhaber2.jpg"
                alt="Atakan Arslan, Kfz-Sachverständiger, begutachtet einen Unfallschaden"
                fill
                priority
                sizes="(min-width: 768px) 40vw, 0px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </section>

        {/* 2 · Warum ein unabhängiges Gutachten */}
        <section className="bg-[#0A1018] px-5 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className={h2}>Warum ein unabhängiges Schadengutachten?</h2>
            <p className={`${lead} mb-8`}>
              Nach einem Unfall muss die Versicherung des Verursachers Ihren Schaden ersetzen. Was dazu
              gehört, legt sie aber nicht von sich aus großzügig fest. Ein unabhängiges Unfallgutachten hält
              den Schaden neutral fest und beziffert, was Ihnen zusteht. Je nach Fall gehören dazu:
            </p>
            <dl className="grid gap-3 sm:grid-cols-2">
              {positionen.map(({ titel, text }) => (
                <div key={titel} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <dt className="font-bold text-white text-[16px] mb-1">{titel}</dt>
                  <dd className="text-white/65 text-[15px] leading-relaxed">{text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-2xl border border-[#E11D2F]/30 bg-[#E11D2F]/[0.06] p-5">
              <p className="font-bold text-white mb-1">Und die Kosten für das Gutachten?</p>
              <p className="text-white/75 text-[15px] leading-relaxed">
                Bei einem unverschuldeten Unfall können Sie die erforderlichen Gutachterkosten
                grundsätzlich gegenüber der gegnerischen Versicherung geltend machen. Ob sie
                vollständig übernommen werden, hängt vom Einzelfall ab, etwa von der Haftungsfrage und der
                Schadenhöhe. Bei sehr kleinen Schäden kann ein Kostenvoranschlag ausreichen. Wir sagen
                Ihnen vorher, was in Ihrem Fall sinnvoll ist.
              </p>
            </div>
          </div>
        </section>

        {/* 3 · Vorteile */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className={h2}>Wir helfen nach einem unverschuldeten Unfall</h2>
            <p className={`${lead} mb-10 max-w-2xl`}>
              Nach einem Unfall hat man genug anderes zu tun. Wir übernehmen den technischen Teil.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {vorteile.map(({ icon: Icon, titel, text }) => (
                <li key={titel} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <Icon size={26} className="mb-4 text-[#E11D2F]" aria-hidden />
                  <h3 className="font-bold text-[17px] text-white mb-1.5">{titel}</h3>
                  <p className="text-white/65 text-[15px] leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 · Ablauf */}
        <section className="bg-[#0A1018] px-5 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className={h2}>So einfach läuft es ab</h2>
            <ol className="mt-8 space-y-4">
              {schritte.map(({ titel, text }, i) => (
                <li key={titel} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#E11D2F] font-display font-black text-[20px]" aria-hidden>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-[18px] text-white mb-1">{titel}</h3>
                    <p className="text-white/65 text-[15px] leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className={btnPrimary}><Phone size={20} aria-hidden /> Jetzt anrufen</a>
              <a href="#kontakt" className={btnSecondary}>Rückruf anfordern</a>
            </div>
          </div>
        </section>

        {/* 5 · Was beachten */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className={h2}>Was sollten Sie nach einem Unfall beachten?</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {hinweise.map(({ titel, text }) => (
                <li key={titel} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <ClipboardList size={22} className="mt-0.5 flex-shrink-0 text-[#E11D2F]" aria-hidden />
                  <div>
                    <h3 className="font-bold text-[16px] text-white mb-1">{titel}</h3>
                    <p className="text-white/65 text-[15px] leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-white/45 leading-relaxed">
              Diese Hinweise sind allgemeine Informationen und ersetzen keine Rechtsberatung. Mehr dazu im
              Ratgeber <Link href="/blog/was-tun-nach-unfall-berlin" className="underline hover:text-white">Was tun nach einem Unfall in Berlin?</Link>
            </p>
          </div>
        </section>

        {/* 6 · Vertrauen */}
        <section className="bg-[#0A1018] px-5 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className={h2}>Wer Ihr Fahrzeug begutachtet</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-[320px_1fr] md:items-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/inhaber2.jpg"
                  alt="Atakan Arslan bei der Fahrzeugbegutachtung"
                  fill
                  sizes="(min-width: 768px) 320px, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="font-display font-black text-2xl text-white mb-1">Atakan Arslan</p>
                <p className="text-white/60 mb-6">Inhaber und Kfz-Sachverständiger, Gutachten Prenzl</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3 text-[15px] text-white/80"><ShieldCheck size={20} className="flex-shrink-0 text-[#E11D2F]" aria-hidden /> TÜV Rheinland zertifizierter Kfz-Sachverständiger (Zertifikat-ID 0217466029, gültig bis 18.12.2028)</li>
                  <li className="flex gap-3 text-[15px] text-white/80"><GraduationCap size={20} className="flex-shrink-0 text-[#E11D2F]" aria-hidden /> Abgeschlossenes Masterstudium</li>
                  <li className="flex gap-3 text-[15px] text-white/80"><Star size={20} className="flex-shrink-0 text-[#fbbf24]" aria-hidden /> {RATING} von 5 Sternen aus {REVIEW_COUNT} Google-Bewertungen</li>
                  <li className="flex gap-3 text-[15px] text-white/80"><MapPin size={20} className="flex-shrink-0 text-[#E11D2F]" aria-hidden /> Büros in der Prenzlauer Allee 88 (10405 Berlin) und der Brückenstraße 6 (12439 Berlin)</li>
                </ul>
                <Image src="/tuev-zertifikat.png" alt="TÜV Rheinland Zertifikat Kfz-Sachverständiger" width={300} height={110} className="mb-4 rounded-lg bg-white p-2" />
                <Link href="/qualifikationen" className="text-[15px] font-semibold text-white underline underline-offset-4 hover:text-[#E11D2F]">
                  Alle Qualifikationen ansehen
                </Link>
              </div>
            </div>

            <h3 className="mt-14 mb-5 font-bold text-[20px] text-white">Was Kunden bei Google schreiben</h3>
            <ul className="grid gap-4 md:grid-cols-3">
              {bewertungen.map((r) => (
                <li key={r.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="mb-3 text-[#fbbf24]" aria-label={`${r.sterne} von 5 Sternen`}>{"★".repeat(r.sterne)}</p>
                  <blockquote className="flex-1 whitespace-pre-line text-white/75 text-[15px] leading-relaxed">{r.text}</blockquote>
                  <p className="mt-4 text-[14px] font-semibold text-white">{r.name} <span className="font-normal text-white/45">· Google, {r.monat}</span></p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7 · FAQ */}
        <section className="px-5 py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className={h2}>Häufige Fragen</h2>
            <div className="mt-8 space-y-3">
              {faq.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05]">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-[16px] text-white [&::-webkit-details-marker]:hidden">
                    <h3>{q}</h3>
                    <ChevronDown size={20} className="flex-shrink-0 text-white/50 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <p className="px-5 pb-5 text-white/70 text-[15px] leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8 · Kontakt */}
        <section id="kontakt" className="scroll-mt-24 bg-[#0A1018] px-5 py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className={h2}>Rückruf anfordern</h2>
              <p className={`${lead} mb-6`}>
                Hinterlassen Sie Name und Telefonnummer. Wir rufen Sie zurück und besprechen kurz, ob und
                wie wir Ihnen helfen können.
              </p>
              <p className="text-white/60 text-[15px] mb-3">Lieber direkt?</p>
              <div className="flex flex-col gap-3">
                <a href={PHONE_HREF} className={btnPrimary}><Phone size={20} aria-hidden /> {PHONE_DISPLAY}</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnWhatsApp}><MessageCircle size={20} aria-hidden /> WhatsApp</a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#050507] p-5 md:p-8">
              <UnfallLeadForm />
            </div>
          </div>
        </section>

        {/* 9 · Abschluss */}
        <section className="bg-[#E11D2F] px-5 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display font-black text-[28px] md:text-4xl text-white leading-tight mb-8">
              Sie hatten einen unverschuldeten Unfall? Lassen Sie Ihren Schaden unabhängig dokumentieren.
            </h2>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-[17px] font-bold text-[#B91C1C]">
                <Phone size={20} aria-hidden /> Anrufen
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={btnWhatsApp}>
                <MessageCircle size={20} aria-hidden /> WhatsApp
              </a>
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-xl border-2 border-white/60 px-7 py-4 text-[17px] font-bold text-white hover:bg-white/10">
                Zum Formular
              </a>
            </div>
          </div>
        </section>

        {/* Interne Links: tragen das Ranking der Seite, bitte behalten */}
        <section className="px-5 py-12 border-t border-white/6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-[13px] font-bold uppercase tracking-widest text-white/40">Weiterlesen</h2>
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
                <Link key={href} href={href} className="rounded-full border border-white/10 px-3.5 py-2 text-[13px] text-white/60 hover:border-white/30 hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
            <h2 className="mt-10 mb-4 text-center text-[13px] font-bold uppercase tracking-widest text-white/40">Unfallgutachten in Ihrem Bezirk</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {bezirkContent.map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} className="rounded-full border border-white/10 px-3.5 py-2 text-[13px] text-white/60 hover:border-white/30 hover:text-white">
                  Unfallgutachten in {b.h1Ort ?? b.nameShort}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StandortKarte variant="dark" />
      </main>

      <FooterNeu />

      {/* Mobile Sticky-Bar: Klicks zählt ConversionTracking global (anruf_klick / whatsapp_klick), kein eigener Handler */}
      <nav aria-label="Schnellkontakt" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-[#050507]/95 p-2 backdrop-blur md:hidden" style={{ paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))" }}>
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 rounded-xl bg-[#E11D2F] py-3.5 text-[16px] font-bold text-white">
          <Phone size={19} aria-hidden /> Anrufen
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-[16px] font-bold text-[#06210f]">
          <MessageCircle size={19} aria-hidden /> WhatsApp
        </a>
      </nav>
    </div>
  );
}
