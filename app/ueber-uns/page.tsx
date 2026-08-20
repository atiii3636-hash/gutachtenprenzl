import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Star, Languages, Clock, MapPin } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import { PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, aboutPageLd } from "@/lib/seo";
import { FALLBACK_REVIEWS } from "@/components/google-reviews-section";

const PATH = "/ueber-uns";

export const metadata: Metadata = pageMetadata({
  title: "Über uns – Ihr Sachverständiger in Prenzlauer Berg",
  description:
    "TÜV Rheinland zertifiziertes Kfz-Sachverständigenbüro in Berlin Prenzlauer Berg. Inhaber Atakan Arslan — persönlich, unabhängig, in 24 Stunden vor Ort.",
  path: PATH,
  keywords: [
    "Kfz Sachverständiger Prenzlauer Berg",
    "Atakan Arslan Gutachter",
    "unabhängiger Kfz Gutachter Berlin",
    "TÜV zertifizierter Sachverständiger Berlin",
  ],
});

const weg = [
  {
    num: "01",
    title: "Das Handwerk",
    text: "Angefangen hat alles mit der Technik am Fahrzeug — Schäden versteht man erst richtig, wenn man weiß, wie ein Auto zusammengesetzt ist und wie repariert wird.",
  },
  {
    num: "02",
    title: "Die Zertifizierung",
    text: "Geprüft und zertifiziert durch den TÜV Rheinland. Eine unabhängig kontrollierte Qualifikation, die deutsche Versicherungen im Regelfall anerkennen.",
  },
  {
    num: "03",
    title: "Das eigene Büro",
    text: "Prenzlauer Allee 88, mitten im Bezirk Pankow. Kurze Wege in den gesamten Nordosten Berlins — und ein fester Anlaufpunkt statt einer Postadresse.",
  },
  {
    num: "04",
    title: "Heute",
    text: "Mobiler Sachverständiger für ganz Berlin. Vom ersten Anruf bis zur Auszahlung durch die Versicherung bleibt derselbe Ansprechpartner an Ihrer Seite.",
  },
];

const haltung = [
  {
    num: "01",
    wort: "Unabhängig",
    satz: "Wir arbeiten für Sie. Nicht für die Versicherung.",
    text: "Der Sachverständige der Gegenseite wird von der Gegenseite bezahlt. Wir nicht. Deshalb prüfen wir jede Position danach, was Ihnen zusteht — nicht danach, was günstig ist.",
  },
  {
    num: "02",
    wort: "Gründlich",
    satz: "Wo andere aufhören, fangen wir an.",
    text: "Wertminderung, Nutzungsausfall, verdeckte Schäden: Genau die Posten, die gern übersehen werden, machen am Ende den Unterschied. Wir belegen sie einzeln.",
  },
  {
    num: "03",
    wort: "Persönlich",
    satz: "Ein Sachverständiger. Kein Callcenter.",
    text: "Sie sprechen bei jedem Auftrag direkt mit Atakan Arslan — keine Warteschleife, keine wechselnden Sachbearbeiter, keine weitergereichte Akte.",
  },
];

const fakten = [
  { icon: ShieldCheck, label: "TÜV Rheinland zertifiziert", value: "Geprüfte Qualifikation" },
  { icon: Star, label: `${REVIEW_COUNT} Google-Bewertungen`, value: "5,0 von 5,0 Sternen" },
  { icon: Languages, label: "Beratung in drei Sprachen", value: "Deutsch · Türkisch · Englisch" },
  { icon: Clock, label: "Rund um die Uhr erreichbar", value: "Auch am Wochenende" },
];

export default function UeberUnsNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={[breadcrumbLd([{ name: "Über uns", path: PATH }]), aboutPageLd(PATH)]} />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Über uns", href: "/ueber-uns" }]} />

      <PageHero
        kicker="Über uns"
        title="Der Mensch hinter"
        titleAccent="dem Gutachten."
        lead="Gutachten Prenzl ist ein unabhängiges Sachverständigenbüro in Berlin Prenzlauer Berg — geführt von einem, der jeden Schaden selbst begutachtet."
        image="/inhaber.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · DER INHABER ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Der Inhaber</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Einer, der sein Handwerk kennt.
          </h2>

          <div className="grid lg:grid-cols-[minmax(0,420px),1fr] gap-8 lg:gap-12 items-start">
            {/* Portrait */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] group" data-reveal>
              <Image
                src="/inhaber2.jpg"
                alt="Atakan Arslan, TÜV-zertifizierter Kfz-Sachverständiger, bei der Schadenaufnahme an einem Fahrzeug"
                fill
                className="object-cover object-[center_20%] group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[10px] font-bold tracking-[0.25em] text-white/60 mb-1">
                  INHABER · SACHVERSTÄNDIGER
                </p>
                <p className="font-display font-black text-[26px] leading-none">Atakan Arslan</p>
              </div>
            </div>

            {/* Text */}
            <div data-reveal style={{ transitionDelay: "100ms" }}>
              <div className="space-y-4 text-white/60 text-[15px] leading-relaxed mb-8">
                <p>
                  Verantwortlicher Sachverständiger ist{" "}
                  <strong className="text-white font-semibold">Atakan Arslan</strong>. Er ist vom{" "}
                  <strong className="text-white font-semibold">TÜV Rheinland zertifiziert</strong> und erstellt
                  Gutachten, die deutsche Versicherungen im Regelfall anerkennen und die vor Gericht verwertbar sind.
                </p>
                <p>
                  Als kleines, unabhängiges Büro gibt es hier keine Hotline und keine Aktenweitergabe. Wer anruft,
                  spricht mit dem Sachverständigen, der später auch am Fahrzeug steht und das Gutachten unterschreibt.
                </p>
                <p>
                  Viele Berliner wissen nicht, dass sie nach einem unverschuldeten Unfall das Recht auf einen eigenen
                  Gutachter haben — und dafür keinen Cent zahlen müssen. Das zu erklären und dann auch durchzusetzen,
                  ist unsere eigentliche Aufgabe.
                </p>
              </div>

              {/* Fakten */}
              <div className="grid sm:grid-cols-2 gap-3">
                {fakten.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3.5 bg-white/[0.03] border border-white/8 rounded-xl p-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#E11D2F]" />
                    </div>
                    <div>
                      <p className="text-[13.5px] font-semibold text-white leading-snug">{label}</p>
                      <p className="text-[12.5px] text-white/40 leading-snug mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 · UNSER WEG ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Unser Weg</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Vier Stationen bis hierher.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {weg.map((w, i) => (
              <div key={w.num} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-black text-[#E11D2F] text-[24px] leading-none">{w.num}</span>
                  <span className="flex-1 h-px bg-white/10" />
                </div>
                <h3 className="font-display font-bold text-[16px] mb-2.5">{w.title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 03 · HALTUNG ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Was uns trägt</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
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
                style={{ transitionDelay: `${i * 90}ms` }}
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

      {/* ============ 04 · BÜRO & EINSATZGEBIET ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Das Büro</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Fester Sitz in Prenzlauer Berg.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Sie müssen nicht zu uns kommen — in den meisten Fällen fahren wir zu Ihnen. Trotzdem gibt es
            eine feste Adresse, an der Sie uns antreffen.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative rounded-xl overflow-hidden h-[320px] md:col-span-2 group" data-reveal>
              <Image
                src="/buero.jpg"
                alt="Sachverständigenbüro Gutachten Prenzl in der Prenzlauer Allee 88 in Berlin"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[10px] font-bold tracking-[0.25em] text-white/60 mb-1">
                  PRENZLAUER ALLEE 88 · 10405 BERLIN
                </p>
                <p className="font-display font-bold text-[20px]">Unser Anlaufpunkt</p>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-7 flex flex-col justify-center" data-reveal style={{ transitionDelay: "100ms" }}>
              <MapPin size={22} className="text-[#E11D2F] mb-4" />
              <h3 className="font-display font-bold text-[18px] mb-3">Berlinweit unterwegs</h3>
              <p className="text-white/50 text-[13.5px] leading-relaxed mb-5">
                Von Pankow bis Spandau, von Mitte bis Köpenick: Wir begutachten Ihr Fahrzeug dort, wo es
                steht — zu Hause, in der Werkstatt oder direkt am Unfallort.
              </p>
              <Link
                href="/standorte"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#E11D2F] hover:text-white transition-colors"
              >
                Einsatzgebiet ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · STIMMEN ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">05</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Kundenstimmen</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-10"
            data-reveal
          >
            Was Berliner Kunden sagen.
          </h2>

          <div className="flex items-center justify-center gap-2.5 mb-10" data-reveal>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={17} className="fill-[#FBBC04] text-[#FBBC04]" />
              ))}
            </span>
            <span className="text-white/55 text-[14px]">
              <strong className="text-white font-bold">5,0</strong> · {REVIEW_COUNT} Bewertungen auf Google
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {FALLBACK_REVIEWS.slice(0, 3).map(({ name, text }, i) => (
              <figure
                key={name}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 flex flex-col"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <blockquote className="text-white/60 text-[13.5px] leading-relaxed mb-5 flex-1">
                  „{text.length > 200 ? text.slice(0, 200).trimEnd() + " …" : text}“
                </blockquote>
                <figcaption className="text-[12px] font-bold tracking-[0.15em] text-white/70 uppercase">
                  {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Lernen Sie uns kennen.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Ein Anruf genügt — Sie sprechen direkt mit Ihrem Sachverständigen, nicht mit einer Zentrale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FAF54] text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
