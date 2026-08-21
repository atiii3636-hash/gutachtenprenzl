import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, BookOpen, Euro, CalendarClock, Scale, AlertTriangle, ParkingCircle, ArrowRight, Car, Banknote } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, SITE_URL } from "@/lib/seo";

const PATH = "/ratgeber";

export const metadata: Metadata = pageMetadata({
  title: "Ratgeber – Ihre Rechte nach einem Unfall in Berlin",
  description:
    "Verständlich erklärt: Was ein Gutachten kostet, wie hoch der Nutzungsausfall ausfällt und warum Sie den Gutachter frei wählen dürfen.",
  path: PATH,
  keywords: [
    "Ratgeber Unfall Berlin",
    "Rechte nach Unfall Berlin",
    "Kfz Gutachten Kosten",
    "Nutzungsausfall Tabelle",
    "was tun nach Unfall",
  ],
});

/* Die Ratgeber-Inhalte liegen bereits als eigene Seiten vor — diese Seite
   bündelt sie und verteilt interne Verlinkung darauf. */
const artikel = [
  {
    icon: AlertTriangle,
    kategorie: "Sofort nach dem Unfall",
    title: "Was tun nach einem Unfall in Berlin?",
    text: "Absichern, Polizei, Fotos, Daten austauschen und warum Sie den Gutachter selbst beauftragen sollten. Schritt für Schritt erklärt.",
    href: "/blog/was-tun-nach-unfall-berlin",
    dauer: "6 Min. Lesezeit",
    prominent: true,
  },
  {
    icon: Car,
    kategorie: "Totalschaden",
    title: "Die 130-Prozent-Regel",
    text: "Reparatur teurer als das Auto wert ist? Bis 30 Prozent darüber dürfen Sie trotzdem reparieren lassen. Bedingungen und Rechenbeispiel.",
    href: "/130-prozent-regelung",
    dauer: "5 Min. Lesezeit",
  },
  {
    icon: Banknote,
    kategorie: "Abrechnung",
    title: "Fiktive Abrechnung: Geld statt Reparatur",
    text: "Sie müssen nicht reparieren lassen. Was dabei erstattet wird, was nicht, und wo die Versicherung kürzen darf.",
    href: "/fiktive-abrechnung",
    dauer: "5 Min. Lesezeit",
  },
  {
    icon: Euro,
    kategorie: "Kosten",
    title: "Was kostet ein Kfz-Gutachten in Berlin?",
    text: "Bei unverschuldetem Unfall zahlen Sie nichts. In allen anderen Fällen richtet sich das Honorar nach der Schadenhöhe — mit Übersicht der Spannen.",
    href: "/kosten-kfz-gutachten-berlin",
    dauer: "5 Min. Lesezeit",
  },
  {
    icon: CalendarClock,
    kategorie: "Entschädigung",
    title: "Nutzungsausfall-Tabelle: Tagessätze A bis L",
    text: "Für jeden Tag ohne Fahrzeug steht Ihnen Geld zu. Welcher Tagessatz für Ihr Auto gilt und wie sich das Alter auswirkt.",
    href: "/nutzungsausfall-tabelle-berlin",
    dauer: "4 Min. Lesezeit",
  },
  {
    icon: Scale,
    kategorie: "Ihre Rechte",
    title: "Eigener Gutachter oder Versicherungsgutachter?",
    text: "Sie dürfen Ihren Sachverständigen frei wählen und müssen den der gegnerischen Versicherung nicht akzeptieren. Der Vergleich.",
    href: "/eigener-gutachter-oder-versicherungsgutachter",
    dauer: "5 Min. Lesezeit",
  },
  {
    icon: ParkingCircle,
    kategorie: "Parkschaden",
    title: "Parkschaden — was jetzt zu tun ist",
    text: "Jemand hat Ihr geparktes Auto beschädigt? Was Sie dokumentieren sollten und was gilt, wenn der Verursacher weg ist.",
    href: "/blog/parkschaden-was-tun",
    dauer: "5 Min. Lesezeit",
  },
];

/* Die häufigsten Irrtümer — inhaltlicher Mehrwert, der zum Gutachten hinführt. */
const irrtuemer = [
  {
    num: "01",
    irrtum: "„Die Versicherung schickt mir schon einen Gutachter.“",
    richtig:
      "Bei unverschuldetem Unfall wählen Sie den Gutachter selbst. Der Sachverständige der gegnerischen Versicherung arbeitet in deren Auftrag, nicht in Ihrem.",
  },
  {
    num: "02",
    irrtum: "„Ein Kostenvoranschlag reicht doch auch.“",
    richtig:
      "Ein Kostenvoranschlag beziffert nur die Reparatur. Wertminderung, Nutzungsausfall und verdeckte Schäden tauchen darin nicht auf — genau dort liegt oft der größere Betrag.",
  },
  {
    num: "03",
    irrtum: "„Das Gutachten muss ich erstmal selbst bezahlen.“",
    richtig:
      "Bei Fremdverschulden nicht. Wir rechnen direkt mit der Haftpflichtversicherung des Verursachers ab, Sie strecken nichts vor.",
  },
  {
    num: "04",
    irrtum: "„Bei kleinen Schäden lohnt sich das nicht.“",
    richtig:
      "Ab etwa 750 Euro Schadenhöhe ist ein Gutachten sinnvoll. Darunter kann ein Kurzgutachten genügen — was passt, sagen wir Ihnen vorab am Telefon.",
  },
];

const collectionLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ratgeber – Ihre Rechte nach einem Unfall in Berlin",
  url: `${SITE_URL}${PATH}`,
  hasPart: artikel.map((a) => ({
    "@type": "Article",
    headline: a.title,
    url: `${SITE_URL}${a.href}`,
    description: a.text,
  })),
};

export default function RatgeberNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd data={[breadcrumbLd([{ name: "Ratgeber", path: PATH }]), collectionLd]} />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Ratgeber", href: "/ratgeber" }]} />

      <PageHero
        kicker="Ratgeber"
        title="Wissen, das Ihnen"
        titleAccent="bares Geld spart."
        lead="Die meisten Geschädigten bekommen weniger, als ihnen zusteht — weil sie ihre Rechte nicht kennen. Hier erklären wir sie ohne Fachchinesisch."
        image="/foto9.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · ARTIKEL ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Themen</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-14"
            data-reveal
          >
            Die wichtigsten Fragen, beantwortet.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artikel.map(({ icon: Icon, kategorie, title, text, href, dauer, prominent }, i) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 hover:bg-white/[0.05] rounded-xl p-6 transition-all hover:-translate-y-1 ${
                  prominent ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""
                }`}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center group-hover:bg-[#E11D2F]/20 transition-colors">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  {prominent && (
                    <span className="text-[9.5px] font-black tracking-[0.15em] text-[#E11D2F] bg-[#E11D2F]/10 border border-[#E11D2F]/25 px-2 py-1 rounded">
                      MEISTGELESEN
                    </span>
                  )}
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-2">{kategorie}</p>
                <h3 className="font-display font-bold text-[17px] leading-snug mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed mb-5 flex-1">{text}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <span className="text-[12px] text-white/30">{dauer}</span>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white/40 group-hover:text-[#E11D2F] transition-colors">
                    Lesen
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}

            {/* Verweis auf den vollständigen Blog */}
            <Link
              href="/blog"
              className="group flex flex-col justify-center items-start bg-gradient-to-br from-[#E11D2F]/12 to-transparent border border-[#E11D2F]/25 hover:border-[#E11D2F]/50 rounded-xl p-6 transition-all hover:-translate-y-1"
              data-reveal
            >
              <BookOpen size={22} className="text-[#E11D2F] mb-4" />
              <h3 className="font-display font-bold text-[17px] leading-snug mb-2">Alle Ratgeber-Artikel</h3>
              <p className="text-white/50 text-[13.5px] leading-relaxed mb-4">
                Weitere Beiträge rund um Unfall, Gutachten und Schadensregulierung in Berlin.
              </p>
              <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#E11D2F]">
                Zum Blog
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 02 · IRRTÜMER ============ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Klarstellung</span>
          </div>
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            Vier Irrtümer, die teuer werden.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            Diese Sätze hören wir fast täglich am Telefon — und fast jedes Mal kostet der Irrtum den
            Geschädigten Geld.
          </p>

          <div className="space-y-4">
            {irrtuemer.map(({ num, irrtum, richtig }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7"
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display font-black text-[#E11D2F]/40 text-[24px] leading-none flex-shrink-0">
                    {num}
                  </span>
                  <p className="font-display font-bold text-[17px] leading-snug text-white/70 italic">{irrtum}</p>
                </div>
                <div className="flex items-start gap-3 pl-1">
                  <span className="mt-1.5 w-8 h-px bg-[#E11D2F] flex-shrink-0" />
                  <p className="text-white/60 text-[14px] leading-relaxed">{richtig}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4">
            Ihre Frage steht nicht dabei?
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Rufen Sie an — wir erklären Ihnen Ihren Fall in verständlichem Deutsch. Kostenlos und unverbindlich.
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
