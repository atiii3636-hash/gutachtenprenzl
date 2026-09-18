import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";

export const metadata: Metadata = {
  title: { absolute: "KFZ Sachverständiger Berlin – kostenlos, in 24h" },
  description: "Unfall in Berlin? Gutachten in 24h, 100% kostenlos bei Fremdverschulden. TÜV-zertifiziert. ☎ 0155 60003661",
  keywords: [
    "kfz sachverständiger berlin",
    "kfz sachverständiger berlin unabhängig",
    "kfz sachverständiger berlin unfall",
    "unabhängiger kfz sachverständiger berlin",
    "kfz sachverständiger berlin kostenlos",
    "kfz sachverständiger in meiner nähe berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was macht ein KFZ Sachverständiger?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ein KFZ Sachverständiger begutachtet neutral und unabhängig Fahrzeugschäden nach einem Unfall. Er dokumentiert alle Schäden, ermittelt die Reparaturkosten, den merkantilen Minderwert und gegebenenfalls den Wiederbeschaffungs- und Restwert. Das Ergebnis ist ein rechtssicheres Gutachten, das von Versicherungen und Gerichten anerkannt wird.",
          },
        },
        {
          "@type": "Question",
          name: "Was ist der Unterschied zwischen KFZ Sachverständiger und KFZ Gutachter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Im Alltag werden die Begriffe synonym verwendet — beide erstellen Kfz-Gutachten. Wichtig ist nicht die Bezeichnung, sondern die Unabhängigkeit: Ein eigener, unabhängiger Sachverständiger arbeitet für Sie als Geschädigten, während der Gutachter der gegnerischen Versicherung deren Interessen vertritt.",
          },
        },
        {
          "@type": "Question",
          name: "Wann sollte ich einen eigenen KFZ Sachverständigen in Berlin beauftragen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei jedem unverschuldeten Unfall ab ca. 750 € Schaden haben Sie das Recht auf einen eigenen Sachverständigen. Beauftragen Sie ihn so früh wie möglich — vor der Reparatur und bevor Sie ein Regulierungsangebot der Versicherung annehmen.",
          },
        },
        {
          "@type": "Question",
          name: "Was kostet ein KFZ Sachverständiger in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei einem unverschuldeten Unfall trägt die Haftpflichtversicherung des Verursachers die Kosten des Sachverständigen vollständig — für Sie ist das Gutachten dann kostenlos. Bei Kasko- oder Eigenschäden klären wir die Kostenübernahme vorab transparent mit Ihnen.",
          },
        },
        {
          "@type": "Question",
          name: "Ist der KFZ Sachverständige in ganz Berlin verfügbar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja. Wir sind mobil in allen Berliner Bezirken unterwegs — von Prenzlauer Berg über Mitte, Pankow und Friedrichshain bis Spandau, Köpenick und Marzahn — sowie im Berliner Umland. Wir kommen zu Ihnen nach Hause, in die Werkstatt oder zum Unfallort.",
          },
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Gutachten Prenzl – KFZ Sachverständiger Berlin",
      url: "https://gutachtenprenzl.de",
      telephone: "+4915560003661",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Prenzlauer Allee 88",
        addressLocality: "Berlin",
        postalCode: "10405",
        addressCountry: "DE",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://gutachtenprenzl.de" },
        { "@type": "ListItem", position: 2, name: "KFZ Sachverständiger Berlin", item: "https://gutachtenprenzl.de/kfz-sachverstaendiger-berlin" },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <Breadcrumb items={[{ name: "KFZ Sachverständiger Berlin", href: "/kfz-sachverstaendiger-berlin" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <Image
          src="/hero-accident.jpg"
          alt="KFZ Sachverständiger bei der Unfallbegutachtung in Berlin"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050507]/60 to-[#050507]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            TÜV-Zertifiziert · Antwort in 30 Minuten
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            KFZ Sachverständiger<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>

          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Unfall gehabt? Wir erstellen Ihr Gutachten in <strong className="text-white">24 Stunden</strong> — bei unverschuldetem Unfall für Sie <strong className="text-[#22c55e]">100% kostenlos</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#B91C1C] text-white font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#E11D2F]/30 transition-all"
            >
              <Phone size={18} />
              Jetzt anrufen: 0155 60003661
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#128C7E]/15 border border-[#25D366]/30 text-[#4ade80] font-semibold text-[15px] px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { val: "24h", label: "Gutachten" },
              { val: "0 €", label: "Bei Fremdverschulden" },
              { val: "TÜV", label: "Zertifiziert" },
              { val: "5,0★", label: "Google Bewertung" },
            ].map(({ val, label }) => (
              <div key={val} className="text-center">
                <p className="font-display font-black text-white text-[28px] leading-none">{val}</p>
                <p className="text-white/35 text-[11px] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#050507] px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Warum Gutachten Prenzl?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Wir kommen zu Ihnen — nach Hause, in die Werkstatt oder zum Unfallort." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von Versicherungen im Regelfall anerkannt." },
              { icon: Star, title: "5,0 Sterne auf Google", text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden. Transparent und unabhängig.` },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="w-10 h-10 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#E11D2F]" />
                </div>
                <div>
                  <p className="font-bold text-white text-[14px] mb-1">{title}</p>
                  <p className="text-white/50 text-[13px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyword-reicher Fließtext — Relevanz für QS & SEO */}
      <section className="bg-[#050507] px-5 py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-6">
            KFZ Sachverständiger in Berlin — neutral &amp; unabhängig
          </h2>
          <div className="text-white/55 text-[15px] leading-relaxed space-y-4">
            <p>
              Als <strong className="text-white">unabhängiger KFZ Sachverständiger in Berlin</strong> erstellen
              wir nach einem Unfall ein neutrales Schadengutachten — beweissicher, von Versicherungen im
              Regelfall anerkannt und vor Gericht verwertbar. Im Gegensatz zum Gutachter der gegnerischen Versicherung
              arbeiten wir ausschließlich in Ihrem Interesse als Geschädigter und sorgen dafür, dass kein
              Schadenposten übersehen wird.
            </p>
            <p>
              Ein vollständiges Kfz-Gutachten umfasst die Reparaturkosten, den merkantilen Minderwert,
              den Nutzungsausfall sowie — beim Totalschaden — Wiederbeschaffungs- und Restwert. Genau diese
              Posten kürzt der Versicherungsgutachter gerne. Als TÜV Rheinland zertifizierter Sachverständiger
              (Zertifikat-ID 0217466029) dokumentieren wir Ihren Schaden lückenlos und meist innerhalb von 24 Stunden.
            </p>
            <p>
              Bei einem <strong className="text-white">unverschuldeten Unfall</strong> haben Sie das Recht,
              Ihren eigenen Sachverständigen frei zu wählen. Die Kosten trägt die Haftpflichtversicherung des
              Verursachers — für Sie ist das Gutachten dann kostenlos. Wir sind mobil in ganz Berlin unterwegs:
              von Prenzlauer Berg über Mitte, Pankow und Friedrichshain bis Spandau, Köpenick und Marzahn.
            </p>
          </div>
        </div>
      </section>

      {/* Gutachtenarten — inhaltliche Abgrenzung zu /kfz-gutachter-berlin,
          damit die beiden Seiten unterschiedliche Suchintentionen bedienen */}
      <section className="bg-[#050507] px-5 py-16 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Welches Gutachten brauchen Sie?
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Nicht jeder Fall braucht dasselbe Dokument. Am Telefon klären wir in zwei
            Minuten, was in Ihrer Situation sinnvoll ist, bevor Ihnen Kosten entstehen.
          </p>
          <div className="space-y-5">
            {[
              {
                t: "Haftpflichtgutachten",
                d: "Der Standardfall nach einem unverschuldeten Unfall. Erfasst den kompletten Schaden und dient als Grundlage gegenüber der gegnerischen Versicherung. Für Sie kostenlos.",
              },
              {
                t: "Kaskogutachten",
                d: "Wenn Sie den Schaden selbst verursacht haben oder der Verursacher unbekannt ist. Läuft über Ihre eigene Versicherung, die meist zuerst einen eigenen Gutachter schickt.",
              },
              {
                t: "Kurzgutachten bei Bagatellschäden",
                d: "Für kleinere Schäden unterhalb der Grenze von etwa 750 Euro. Kompakter und günstiger als ein vollständiges Gutachten, aber ausreichend dokumentiert.",
              },
              {
                t: "Wertgutachten",
                d: "Kein Unfall im Spiel, sondern die Frage nach dem Marktwert: vor dem Verkauf, bei der Leasingrückgabe, im Erbfall oder bei einer Scheidung.",
              },
              {
                t: "Oldtimergutachten",
                d: "Bewertung nach Zustand, Historie und Originalität. Wird für die Versicherung und für das H-Kennzeichen gebraucht. Standardlisten helfen hier nicht weiter.",
              },
              {
                t: "Beweissicherungsgutachten",
                d: "Sichert das Schadenbild, bevor die Werkstatt anfängt. Danach lässt sich das Ausmaß kaum noch belegen.",
              },
            ].map((g) => (
              <div key={g.t} className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <p className="font-bold text-white text-[15px] mb-2">{g.t}</p>
                <p className="text-white/55 text-[14px] leading-relaxed">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifikation — Trust-Signal, das Wettbewerber selten sauber erklären */}
      <section className="bg-[#050507] px-5 py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-6">
            Woran Sie einen seriösen Sachverständigen erkennen
          </h2>
          <div className="text-white/55 text-[15px] leading-relaxed space-y-4">
            <p>
              Die Berufsbezeichnung Sachverständiger ist in Deutschland nicht geschützt.
              Theoretisch darf sich jeder so nennen. Entscheidend ist deshalb, ob eine
              anerkannte Stelle die Qualifikation geprüft hat. Wir sind vom{" "}
              <strong className="text-white">TÜV Rheinland zertifiziert</strong>{" "}
              (Zertifikat-ID 0217466029, gültig bis 18.12.2028). Diese Zertifizierung wird
              von deutschen Versicherungen im Regelfall anerkannt, und die Gutachten sind vor
              Gericht verwertbar.
            </p>
            <p>
              Der zweite Punkt ist die Unabhängigkeit. Ein Gutachter, der regelmäßig
              Aufträge von einer Versicherung bekommt, hat ein Interesse daran, diese
              Versicherung nicht zu verärgern. Wir arbeiten ausschließlich für
              Geschädigte, nicht für Versicherer. Das ist der Grund, warum unsere
              Zahlen manchmal höher ausfallen als die der Gegenseite.
            </p>
            <p>
              Drittens: Fragen Sie, wer das Gutachten tatsächlich schreibt. Bei größeren
              Büros sprechen Sie am Telefon oft mit einer Zentrale und sehen den
              Sachverständigen nie. Bei uns ist die Person, die Ihr Fahrzeug begutachtet,
              dieselbe, die das Gutachten unterschreibt.
            </p>
          </div>
        </div>
      </section>

      <StandortKarte variant="dark" />

      {/* FAQ */}
      <section className="bg-[#050507] px-5 py-16 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase text-center mb-10">
            Häufige Fragen zum KFZ Sachverständigen
          </h2>
          <div className="space-y-4">
            {[
              { q: "Was macht ein KFZ Sachverständiger?", a: "Er begutachtet neutral Ihren Fahrzeugschaden, ermittelt Reparaturkosten, merkantilen Minderwert und ggf. Wiederbeschaffungs- und Restwert und erstellt ein rechtssicheres Gutachten, das Versicherungen und Gerichte anerkennen." },
              { q: "Was ist der Unterschied zwischen Sachverständiger und Gutachter?", a: "Im Alltag dasselbe — beide erstellen Kfz-Gutachten. Entscheidend ist die Unabhängigkeit: Ein eigener Sachverständiger arbeitet für Sie, der Versicherungsgutachter für die Gegenseite." },
              { q: "Wann sollte ich einen eigenen Sachverständigen beauftragen?", a: "Bei jedem unverschuldeten Unfall ab ca. 750 € Schaden — und zwar vor der Reparatur und bevor Sie ein Regulierungsangebot annehmen." },
              { q: "Was kostet ein KFZ Sachverständiger in Berlin?", a: "Bei Fremdverschulden 0 € — die gegnerische Haftpflicht zahlt. Bei Kasko-/Eigenschäden klären wir die Kostenübernahme vorab transparent." },
              { q: "Ist der Sachverständige in ganz Berlin verfügbar?", a: "Ja, mobil in allen Bezirken und im Umland. Wir kommen zu Ihnen nach Hause, in die Werkstatt oder zum Unfallort." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white/[0.03] border border-white/8 rounded-2xl p-6">
                <p className="font-bold text-white text-[15px] mb-2">{q}</p>
                <p className="text-white/55 text-[14px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interne Verlinkung — Leistungen + Bezirke */}
      <section className="bg-[#050507] px-5 py-12 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-4">
            Unsere Leistungen &amp; Einsatzgebiete
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
              { href: "/heckauffahrunfall-berlin", label: "Heckauffahrunfall" },
              { href: "/parkschaden-gutachten-berlin", label: "Parkschaden" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", label: "Prenzlauer Berg" },
              { href: "/kfz-sachverstaendiger-berlin-pankow", label: "Pankow" },
              { href: "/kfz-sachverstaendiger-berlin-mitte", label: "Mitte" },
              { href: "/kfz-sachverstaendiger-berlin-friedrichshain", label: "Friedrichshain" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white bg-white/[0.03] border border-white/8 hover:border-[#E11D2F] hover:text-[#E11D2F] px-4 py-2 rounded-xl transition-colors">
                <ArrowRight size={13} />{label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E11D2F] px-5 py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Jetzt kostenlos anfragen
          </h2>
          <p className="text-white/80 text-[15px] mb-8">
            Schaden melden, Foto hochladen — wir melden uns in 30 Minuten.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4915560003661"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-[#E11D2F] font-display font-black uppercase tracking-wide text-[15px] px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <Phone size={18} />
              0155 60003661
            </a>
            <Link
              href="/#schaden"
              className="inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white font-bold text-[15px] px-8 py-4 rounded-xl transition-all hover:bg-white/10"
            >
              Schaden online melden
            </Link>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <FooterNeu />

    </div>
  );
}
