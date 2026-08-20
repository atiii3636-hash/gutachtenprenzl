import type { Metadata } from "next";
import StandortKarte from "@/components/standort-karte";
import Image from "next/image";
import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_URL, REVIEW_COUNT } from "@/lib/contact";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";

export const metadata: Metadata = {
  title: { absolute: "KFZ-Gutachter Berlin – Unfallgutachten in 24h" },
  description:
    "Ihr unabhängiger KFZ-Gutachter in Berlin. Gutachten in 24h, 100% kostenlos bei Fremdverschulden. ☎ 0155 60003661",
  keywords: [
    "kfz gutachter berlin",
    "kfz gutachter berlin kostenlos",
    "kfz gutachter berlin unfall",
    "unabhängiger kfz gutachter berlin",
    "kfz gutachter in der nähe berlin",
    "auto gutachter berlin",
  ],
  alternates: { canonical: "https://gutachtenprenzl.de/kfz-gutachter-berlin" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Was kostet ein KFZ Gutachter in Berlin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei einem unverschuldeten Unfall ist der KFZ Gutachter für Sie kostenlos — die Haftpflichtversicherung des Unfallverursachers übernimmt die Gutachterkosten vollständig. Bei Kasko- oder Eigenschäden besprechen wir die Kosten vorab transparent mit Ihnen.",
          },
        },
        {
          "@type": "Question",
          name: "Wann brauche ich einen eigenen KFZ Gutachter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bei jedem unverschuldeten Unfall ab einem Schaden von ca. 750 € haben Sie Anspruch auf einen eigenen Gutachter. Beauftragen Sie ihn vor der Reparatur und bevor Sie ein Angebot der gegnerischen Versicherung annehmen — nur so sichern Sie Ihren vollen Anspruch.",
          },
        },
        {
          "@type": "Question",
          name: "Wie schnell bekomme ich mein Gutachten?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wir kommen in der Regel am selben oder nächsten Tag zu Ihnen. Das fertige Gutachten erhalten Sie innerhalb von 24 Stunden nach der Besichtigung — digital und auf Wunsch zusätzlich als Ausdruck.",
          },
        },
        {
          "@type": "Question",
          name: "Übernimmt die Versicherung die Kosten des KFZ Gutachters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ja — bei Fremdverschulden trägt die gegnerische Haftpflichtversicherung sämtliche Gutachterkosten. Als Geschädigter dürfen Sie Ihren Gutachter frei wählen; Sie müssen nicht den Gutachter der Versicherung akzeptieren.",
          },
        },
        {
          "@type": "Question",
          name: "In welchen Berliner Bezirken ist der KFZ Gutachter tätig?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In ganz Berlin und im Umland. Wir sind mobil unterwegs — Prenzlauer Berg, Mitte, Pankow, Friedrichshain, Kreuzberg, Lichtenberg, Charlottenburg, Neukölln, Spandau, Köpenick, Marzahn, Steglitz, Tempelhof, Schöneberg und Reinickendorf.",
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
        { "@type": "ListItem", position: 2, name: "KFZ-Gutachter Berlin", item: "https://gutachtenprenzl.de/kfz-gutachter-berlin" },
      ],
    },
  ],
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <NavbarNeu />
      <div className="pt-16" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-5 pt-16 pb-14 overflow-hidden">
        <Image
          src="/hero-accident.jpg"
          alt="KFZ-Gutachter bei der Unfallbegutachtung in Berlin"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D14]/60 to-[#080D14]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            TÜV-Zertifiziert · Antwort in 30 Minuten
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-tight mb-5">
            KFZ-Gutachter<br />
            <span className="text-[#E11D2F]">Berlin</span>
          </h1>

          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-xl mx-auto mb-8">
            Unfall gehabt? Ihr unabhängiger KFZ-Gutachter erstellt Ihr Gutachten in <strong className="text-white">24 Stunden</strong> — bei unverschuldetem Unfall für Sie <strong className="text-[#22c55e]">100% kostenlos</strong>.
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
      <section className="bg-white px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-10">
            Ihr KFZ-Gutachter in Berlin
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle, title: "Kostenlos bei Fremdverschulden", text: "Die gegnerische Versicherung trägt alle Kosten des Gutachters. Sie zahlen 0 €." },
              { icon: Clock, title: "Gutachten in 24 Stunden", text: "Der Gutachter kommt zu Ihnen — nach Hause, in die Werkstatt oder zum Unfallort." },
              { icon: Shield, title: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028. Von Versicherungen im Regelfall anerkannt." },
              { icon: Star, title: "5,0 Sterne auf Google", text: `Über ${REVIEW_COUNT} echte Bewertungen von Berliner Kunden. Unabhängig und transparent.` },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50">
                <div className="w-10 h-10 bg-[#E11D2F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#E11D2F]" />
                </div>
                <div>
                  <p className="font-bold text-[#080D14] text-[14px] mb-1">{title}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Relevanz-Text für QS / Anzeigenrelevanz */}
          <div className="max-w-2xl mx-auto mt-12 text-gray-600 text-[14px] leading-relaxed space-y-4">
            <p>
              Als unabhängiger <strong className="text-[#080D14]">KFZ-Gutachter in Berlin</strong> erstellen wir
              nach einem Unfall ein neutrales Schadengutachten — beweissicher, von Versicherungen im Regelfall anerkannt
              und für die Schadenregulierung verwertbar. Ob Auffahrunfall, Parkschaden oder Totalschaden:
              Sie erhalten Ihr Unfallgutachten in der Regel innerhalb von 24 Stunden.
            </p>
            <p>
              Bei einem unverschuldeten Unfall haben Sie als Geschädigter das Recht, einen eigenen
              KFZ-Gutachter zu beauftragen. Die Kosten trägt die gegnerische Haftpflichtversicherung —
              für Sie ist das Gutachten dann kostenlos. Wir sind in ganz Berlin mobil unterwegs:
              von Prenzlauer Berg über Pankow und Mitte bis Lichtenberg.
            </p>
          </div>
        </div>
      </section>

      {/* Was im Gutachten steht — beantwortet, was Geschädigte tatsächlich wissen wollen */}
      <section className="bg-[#080D14] px-5 py-16 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase mb-4">
            Was in Ihrem Gutachten steht
          </h2>
          <p className="text-white/50 text-[15px] leading-relaxed mb-8">
            Viele glauben, ein Gutachten sei nur eine Liste der Reparaturkosten. Tatsächlich
            entscheidet es über deutlich mehr Geld. Diese Posten erfassen wir bei jedem Auftrag:
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                t: "Reparaturkosten",
                d: "Kalkuliert mit den Stundensätzen, die Berliner Fachwerkstätten tatsächlich nehmen, nicht mit Pauschalen aus einer Tabelle.",
              },
              {
                t: "Wiederbeschaffungswert",
                d: "Was Ihr Fahrzeug unmittelbar vor dem Unfall wert war. Grundlage für alles, was bei einem Totalschaden folgt.",
              },
              {
                t: "Restwert",
                d: "Was das beschädigte Fahrzeug noch bringt. Wird von Versicherungen gerne hoch angesetzt, weil das Ihre Auszahlung senkt.",
              },
              {
                t: "Merkantile Wertminderung",
                d: "Ihr Auto ist repariert und trotzdem weniger wert, weil es jetzt ein Unfallwagen ist. Diesen Verlust können Sie sich erstatten lassen.",
              },
              {
                t: "Nutzungsausfall",
                d: "Für jeden Tag ohne Fahrzeug steht Ihnen eine Entschädigung zu, auch wenn Sie keinen Mietwagen genommen haben.",
              },
              {
                t: "Reparaturdauer",
                d: "Legt fest, für wie viele Tage Nutzungsausfall oder Mietwagen überhaupt abgerechnet werden dürfen.",
              },
            ].map((p) => (
              <div key={p.t} className="bg-white/4 border border-white/8 rounded-2xl p-6">
                <p className="font-bold text-white text-[15px] mb-2">{p.t}</p>
                <p className="text-white/55 text-[14px] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abgrenzung + typische Fehler */}
      <section className="bg-white px-5 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase mb-6">
            Gutachten oder Kostenvoranschlag?
          </h2>
          <div className="text-gray-600 text-[15px] leading-relaxed space-y-4 mb-10">
            <p>
              Ein Kostenvoranschlag der Werkstatt sagt, was die Reparatur kostet. Mehr nicht.
              Er erfasst weder Wertminderung noch Nutzungsausfall, und er ist kein
              Beweismittel. Wenn die gegnerische Versicherung später bestreitet, dass ein
              Schaden vom Unfall stammt, hilft Ihnen ein Kostenvoranschlag nicht weiter.
            </p>
            <p>
              Ein Gutachten dokumentiert den Zustand beweissicher, ist vor Gericht verwertbar
              und erfasst alle Ansprüche. Unterhalb der Bagatellgrenze von rund 750 Euro
              reicht meist der Kostenvoranschlag, darüber sollten Sie ein Gutachten machen
              lassen. Wo Ihr Fall liegt, klären wir vorab am Telefon, bevor Ihnen Kosten entstehen.
            </p>
          </div>

          <h2 className="font-display font-black text-2xl md:text-3xl text-[#080D14] uppercase mb-6">
            Vier Fehler, die Geld kosten
          </h2>
          <ul className="space-y-4">
            {[
              {
                t: "Zu früh reparieren lassen",
                d: "Ist der Schaden erst behoben, lässt sich sein Ausmaß kaum noch beweisen. Lassen Sie den Zustand vorher dokumentieren.",
              },
              {
                t: "Das Fahrzeug vorschnell verkaufen",
                d: "Bei einem Totalschaden verschenken Sie damit Verhandlungsspielraum. Warten Sie ab, bis der Restwert ermittelt ist.",
              },
              {
                t: "Den Gutachter der Gegenseite akzeptieren",
                d: "Der arbeitet für die Versicherung, nicht für Sie. Bei unverschuldetem Unfall dürfen Sie Ihren eigenen wählen, und die Gegenseite zahlt ihn.",
              },
              {
                t: "Das erste Abfindungsangebot annehmen",
                d: "Versicherungen bieten oft schnell eine Pauschale an. Ohne Gutachten wissen Sie nicht, ob sie Wertminderung und Nutzungsausfall enthält.",
              },
            ].map((f) => (
              <li key={f.t} className="flex gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#E11D2F] mt-2.5" />
                <div>
                  <p className="font-bold text-[#080D14] text-[15px]">{f.t}</p>
                  <p className="text-gray-600 text-[14px] leading-relaxed">{f.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StandortKarte variant="dark" />

      {/* FAQ */}
      <section className="bg-white px-5 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-3xl md:text-4xl text-[#080D14] uppercase text-center mb-10">
            Häufige Fragen zum KFZ-Gutachter in Berlin
          </h2>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein KFZ Gutachter in Berlin?", a: "Bei unverschuldetem Unfall 0 € — die Haftpflicht des Verursachers zahlt alles. Bei Kasko-/Eigenschäden besprechen wir die Kosten vorab transparent." },
              { q: "Wann brauche ich einen eigenen KFZ Gutachter?", a: "Bei jedem unverschuldeten Unfall ab ca. 750 € Schaden — vor der Reparatur und bevor Sie ein Angebot der gegnerischen Versicherung annehmen." },
              { q: "Wie schnell bekomme ich mein Gutachten?", a: "Termin meist am selben oder nächsten Tag, fertiges Gutachten innerhalb von 24 Stunden nach der Besichtigung — digital, auf Wunsch zusätzlich als Ausdruck." },
              { q: "Übernimmt die Versicherung die Gutachterkosten?", a: "Ja, bei Fremdverschulden trägt die gegnerische Haftpflicht sämtliche Kosten. Als Geschädigter wählen Sie Ihren Gutachter frei — Sie müssen nicht den Gutachter der Versicherung nehmen." },
              { q: "In welchen Berliner Bezirken sind Sie tätig?", a: "In ganz Berlin und im Umland — mobil von Prenzlauer Berg über Mitte, Pankow und Friedrichshain bis Spandau, Köpenick und Marzahn." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="font-bold text-[#080D14] text-[15px] mb-2">{q}</p>
                <p className="text-gray-600 text-[14px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interne Verlinkung — Leistungen + Bezirke */}
      <section className="bg-white px-5 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Unsere Leistungen &amp; Einsatzgebiete
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { href: "/unfallgutachten-berlin", label: "Unfallgutachten Berlin" },
              { href: "/heckauffahrunfall-berlin", label: "Heckauffahrunfall" },
              { href: "/parkschaden-gutachten-berlin", label: "Parkschaden" },
              { href: "/totalschaden-gutachten-berlin", label: "Totalschaden" },
              { href: "/kfz-sachverstaendiger-berlin-prenzlauer-berg", label: "Prenzlauer Berg" },
              { href: "/kfz-sachverstaendiger-berlin-mitte", label: "Mitte" },
              { href: "/kfz-sachverstaendiger-berlin-pankow", label: "Pankow" },
              { href: "/kfz-sachverstaendiger-berlin-kreuzberg", label: "Kreuzberg" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#080D14] bg-gray-50 border border-gray-200 hover:border-[#E11D2F] hover:text-[#E11D2F] px-4 py-2 rounded-xl transition-colors">
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
            Schaden melden, Foto hochladen — Ihr Gutachter meldet sich in 30 Minuten.
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
