import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Check, Handshake, Gavel, ShieldCheck, Car, Search, FileText, Send } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import FaqListe from "@/components/neu/faq-liste";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";

const PATH = "/wertgutachten";

export const metadata: Metadata = pageMetadata({
  title: "Wertgutachten Berlin, Marktwert für Ihr Fahrzeug",
  description:
    "Neutrales Wertgutachten für Kauf, Verkauf, Erbschaft oder Versicherung. TÜV-zertifizierter Sachverständiger in Berlin, Bewertung nach realem Marktwert.",
  path: PATH,
  // Keywords aus dem Search-Console-Export vom 21.08.2026, nach Impressionen sortiert.
  // Oldtimer bewusst nicht dabei: das Feld wird organisch nicht aktiv bespielt.
  keywords: [
    "Kfz Wertgutachten",
    "Wertgutachten Auto",
    "Wertgutachten Berlin",
    "Fahrzeugbewertung Berlin",
    "Wertgutachten Leasingrückgabe",
    "Marktwertgutachten Auto",
    "Zeitwertgutachten Kfz",
  ],
});

const anlaesse = [
  {
    num: "01",
    icon: Handshake,
    title: "Kauf und Verkauf",
    text: "Ein neutrales Gutachten schafft Vertrauen auf beiden Seiten. Verkäufer belegen ihren Preis, Käufer wissen, worauf sie sich einlassen. Das verkürzt Verhandlungen erheblich.",
  },
  {
    num: "02",
    icon: Gavel,
    title: "Erbschaft und Scheidung",
    text: "Wenn ein Fahrzeug aufgeteilt oder ausgezahlt werden muss, braucht es einen belastbaren Wert. Ein neutrales Gutachten verhindert Streit über Schätzungen.",
  },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Versicherung",
    text: "Für Sonderfahrzeuge, Umbauten oder besondere Ausstattung reicht die pauschale Einstufung oft nicht. Ein Wertgutachten sichert die richtige Versicherungssumme ab.",
  },
  {
    num: "04",
    icon: Car,
    title: "Oldtimer und Liebhaberfahrzeuge",
    text: "Zustandsnote, Originalität und Historie bestimmen hier den Wert weit mehr als Alter und Laufleistung. Das lässt sich nicht aus einer Tabelle ablesen.",
  },
];

const bewertung = [
  "Fahrzeugidentität, Ausstattung und Sonderausstattung",
  "Laufleistung, Vorbesitzer und Historie",
  "Technischer Zustand von Antrieb, Fahrwerk und Karosserie",
  "Lackzustand und Spuren früherer Reparaturen",
  "Vorschäden und deren Auswirkung auf den Wert",
  "Aktuelle Angebots- und Verkaufspreise am Markt",
];

const ablauf = [
  { num: "01", icon: Phone, title: "Anliegen klären", zeit: "Kurzes Gespräch", text: "Sie sagen uns, wofür Sie das Gutachten brauchen. Danach richtet sich der Umfang und was es kostet." },
  { num: "02", icon: Search, title: "Begutachtung", zeit: "Etwa 45 bis 90 Minuten", text: "Wir sehen uns das Fahrzeug an, prüfen Zustand, Ausstattung und Unterlagen und dokumentieren alles fotografisch." },
  { num: "03", icon: FileText, title: "Marktanalyse", zeit: "Reale Vergleichspreise", text: "Wir gleichen mit vergleichbaren Fahrzeugen am Markt ab. Der Wert wird hergeleitet, nicht geschätzt." },
  { num: "04", icon: Send, title: "Gutachten erhalten", zeit: "Wenige Werktage", text: "Sie bekommen ein nachvollziehbares Dokument, das Sie gegenüber Käufer, Gericht oder Versicherung vorlegen können." },
];

const faqs = [
  {
    q: "Was kostet ein Wertgutachten?",
    a: "Anders als beim Unfallgutachten zahlt hier keine gegnerische Versicherung, das Honorar tragen Sie selbst. Es richtet sich nach Fahrzeug und Umfang der Bewertung. Rufen Sie kurz an, dann nennen wir Ihnen vorab einen konkreten Preis.",
  },
  {
    q: "Was ist der Unterschied zwischen Wertgutachten und Schadengutachten?",
    a: "Ein Schadengutachten dokumentiert einen konkreten Unfallschaden und die Kosten seiner Beseitigung. Ein Wertgutachten stellt fest, was das Fahrzeug in seinem aktuellen Zustand wert ist, unabhängig von einem Schadenereignis.",
  },
  {
    q: "Welche Werte werden im Gutachten ausgewiesen?",
    a: "Je nach Anlass der Händlereinkaufswert, der Händlerverkaufswert und der Wiederbeschaffungswert. Beim Verkauf ist der Marktwert entscheidend, bei der Versicherung eher der Wiederbeschaffungswert.",
  },
  {
    q: "Bewerten Sie auch Oldtimer?",
    a: "Ja. Hier zählt vor allem der Zustand, eingeordnet in die üblichen Zustandsnoten von 1 bis 5, dazu Originalität, Historie und die Qualität früherer Restaurierungen. Diese Bewertung braucht mehr Zeit als bei einem Alltagsfahrzeug.",
  },
  {
    q: "Welche Unterlagen soll ich bereithalten?",
    a: "Zulassungsbescheinigung Teil I und II, Serviceheft, Rechnungen für Reparaturen und Sonderausstattung sowie vorhandene frühere Gutachten. Je vollständiger die Unterlagen, desto belastbarer die Bewertung.",
  },
  {
    q: "Wie lange ist ein Wertgutachten gültig?",
    a: "Es beschreibt den Wert zu einem bestimmten Stichtag. Da sich der Fahrzeugmarkt bewegt, sollte ein Gutachten für Verkauf oder Versicherung nicht wesentlich älter als etwa ein Jahr sein.",
  },
  {
    q: "Lohnt sich ein Gutachten vor der Leasingrückgabe?",
    a: "In den meisten Fällen ja. Der Gutachter der Leasinggesellschaft listet bei der Rückgabe jede Position einzeln auf, und die Rechnung fällt regelmäßig höher aus als erwartet. Wenn Sie vorher wissen, was echter Minderwert ist und was als übliche Abnutzung gilt, können Sie gezielt entscheiden, ob sich eine Reparatur vorab rechnet. Der richtige Zeitpunkt sind zwei bis vier Wochen vor dem Termin.",
  },
  {
    q: "Ich will privat verkaufen. Welcher Wert steht dann im Gutachten?",
    a: "Für den Privatverkauf ist der Marktwert die relevante Zahl, also der Preis, den Sie zwischen Privatleuten realistisch erzielen. Wir weisen zusätzlich den Händlereinkaufswert aus, damit Sie einordnen können, was ein Händler Ihnen bieten würde. Der Abstand zwischen beiden ist oft das stärkste Argument dafür, doch privat zu verkaufen.",
  },
];

export default function WertgutachtenNeu() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Leistungen", path: "/leistungen" },
            { name: "Wertgutachten", path: PATH },
          ]),
          serviceLd({
            name: "Wertgutachten Berlin",
            description:
              "Neutrale Fahrzeugbewertung für Kauf, Verkauf, Erbschaft, Scheidung und Versicherung. Auch für Oldtimer.",
            path: PATH,
            serviceType: "Kfz-Wertgutachten",
          }),
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb
        items={[
          { name: "Leistungen", href: "/leistungen" },
          { name: "Wertgutachten", href: "/wertgutachten" },
        ]}
      />

      <PageHero
        kicker="Wertgutachten"
        title="Was Ihr Fahrzeug"
        titleAccent="wirklich wert ist."
        lead="Ob Verkauf, Erbschaft oder Versicherung: Eine neutrale Bewertung schafft eine Zahl, die niemand anzweifeln kann. Hergeleitet aus dem echten Markt, nicht geschätzt."
        image="/foto2.jpg"
        ctaLabel="Jetzt anrufen"
      />

      {/* ============ 01 · ANLÄSSE ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">01</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Anlässe</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4" data-reveal>
            Wann Sie eine Bewertung brauchen.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-14 leading-relaxed" data-reveal>
            Immer dann, wenn ein Fahrzeugwert gegenüber jemand anderem belegt werden muss.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {anlaesse.map(({ num, icon: Icon, title, text }, i) => (
              <div
                key={num}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-7 hover:border-[#E11D2F]/30 transition-colors"
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  <span className="font-display font-black text-[#E11D2F]/30 text-[24px]">{num}</span>
                </div>
                <h3 className="font-display font-bold text-[18px] mb-2.5">{title}</h3>
                <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 02 · WAS GEPRÜFT WIRD ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">02</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Die Grundlage</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Woraus sich der Wert ergibt.
          </h2>

          <ul className="space-y-2.5">
            {bewertung.map((v, i) => (
              <li
                key={v}
                className="flex items-start gap-3.5 bg-white/[0.03] border border-white/8 rounded-lg p-4"
                data-reveal
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="w-6 h-6 rounded-full bg-[#22c55e]/15 flex items-center justify-center flex-shrink-0 mt-px">
                  <Check size={13} className="text-[#22c55e] stroke-[3]" />
                </span>
                <span className="text-[14.5px] text-white/75 leading-snug">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ 03 · ABLAUF ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">03</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Ablauf</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-14" data-reveal>
            So entsteht Ihr Wertgutachten.
          </h2>

          <div className="relative">
            <span className="hidden sm:block absolute left-[27px] top-8 bottom-8 w-px bg-white/10" aria-hidden="true" />
            <ol className="space-y-4">
              {ablauf.map(({ num, icon: Icon, title, zeit, text }, i) => (
                <li key={num} className="relative flex gap-5 sm:gap-6" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0A0A0D] border border-[#E11D2F]/30 items-center justify-center flex-shrink-0 relative z-10">
                    <Icon size={19} className="text-[#E11D2F]" />
                  </div>
                  <div className="flex-1 bg-white/[0.03] border border-white/8 rounded-xl p-6 md:p-7 hover:border-white/20 transition-colors">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 mb-3">
                      <span className="font-display font-black text-[#E11D2F] text-[20px] leading-none">{num}</span>
                      <h3 className="font-display font-bold text-[19px] leading-none">{title}</h3>
                      <span className="text-[10.5px] font-bold tracking-[0.18em] text-white/35 uppercase">{zeit}</span>
                    </div>
                    <p className="text-white/55 text-[14.5px] leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============ 04 · DIE WERTE ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">04</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">Hintergrund</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Ein Auto hat nicht einen Wert.
          </h2>

          <div className="space-y-12">
            <div data-reveal>
              <h3 className="font-display font-black tracking-tight text-[clamp(19px,2.6vw,26px)] leading-[1.2] mb-4">
                Vier Zahlen, die alle etwas anderes bedeuten
              </h3>
              <p className="text-white/55 text-[15.5px] leading-relaxed mb-4">
                Wer nach dem Wert seines Fahrzeugs fragt, bekommt je nach Quelle vier verschiedene
                Antworten, und alle vier können richtig sein. Der Händlereinkaufswert ist das, was ein
                Händler zahlt, wenn er das Auto in Zahlung nimmt. Der Händlerverkaufswert ist das, was
                dasselbe Auto anschließend auf dem Hof kostet, inklusive Aufbereitung, Gewährleistung
                und Marge. Zwischen beiden liegen bei einem Mittelklassewagen schnell 2.000 bis 3.000 Euro.
              </p>
              <p className="text-white/55 text-[15.5px] leading-relaxed mb-4">
                Der Wiederbeschaffungswert beschreibt, was Sie zahlen müssten, um ein gleichwertiges
                Fahrzeug bei einem seriösen Händler zu kaufen. Das ist die Zahl, die bei Versicherungen
                und nach einem Totalschaden zählt. Der Marktwert schließlich ist der Preis, den Sie im
                Privatverkauf realistisch erzielen, und liegt meist zwischen Einkauf und Verkauf.
              </p>
              <p className="text-white/55 text-[15.5px] leading-relaxed">
                Im Gutachten weisen wir aus, welche dieser Werte für Ihren Fall relevant sind und wie
                wir dorthin kommen. Eine einzelne Zahl ohne Herleitung nützt Ihnen gegenüber Käufer,
                Leasinggeber oder Gericht wenig.
              </p>
            </div>

            <div data-reveal>
              <h3 className="font-display font-black tracking-tight text-[clamp(19px,2.6vw,26px)] leading-[1.2] mb-4">
                Leasingrückgabe: der teuerste Termin des Leasingvertrags
              </h3>
              <p className="text-white/55 text-[15.5px] leading-relaxed mb-4">
                Bei der Rückgabe prüft ein Sachverständiger im Auftrag der Leasinggesellschaft das
                Fahrzeug und listet auf, was über normale Gebrauchsspuren hinausgeht. Diese Liste ist
                die Rechnungsgrundlage, und sie fällt regelmäßig höher aus als erwartet. Steinschläge,
                Kratzer an der Ladekante, ein abgefahrener Reifensatz, fehlender zweiter Schlüssel:
                jede Position wird einzeln bepreist.
              </p>
              <p className="text-white/55 text-[15.5px] leading-relaxed mb-4">
                Ein eigenes Gutachten vor der Rückgabe verschiebt die Ausgangslage. Sie wissen vorher,
                was tatsächlich Minderwert ist und was als übliche Abnutzung durchgeht, und können
                entscheiden, ob sich eine Reparatur vorab rechnet. Eine Smart-Repair-Beule für 180 Euro
                schlägt bei der Rückgabe oft mit dem Dreifachen zu Buche.
              </p>
              <p className="text-white/55 text-[15.5px] leading-relaxed">
                Der richtige Zeitpunkt sind zwei bis vier Wochen vor dem Rückgabetermin. Dann bleibt
                noch Zeit, etwas machen zu lassen, und das Fahrzeug ist zum Termin in dem Zustand, den
                das Gutachten beschreibt.
              </p>
            </div>

            <div data-reveal>
              <h3 className="font-display font-black tracking-tight text-[clamp(19px,2.6vw,26px)] leading-[1.2] mb-4">
                Wann sich ein Wertgutachten nicht lohnt
              </h3>
              <p className="text-white/55 text-[15.5px] leading-relaxed mb-4">
                Bei einem zehn Jahre alten Kleinwagen mit 180.000 Kilometern steht der Wert innerhalb
                einer engen Spanne fest, die jeder Online-Rechner ähnlich trifft. Ein Gutachten kostet
                dann mehr, als es an Verhandlungsspielraum bringt. Dasselbe gilt, wenn Sie ohnehin an
                einen Händler verkaufen, der nach eigener Kalkulation einkauft.
              </p>
              <p className="text-white/55 text-[15.5px] leading-relaxed">
                Interessant wird es, wenn eine der Zahlen strittig werden kann: bei Sonderausstattung,
                Umbauten, sehr geringer Laufleistung, einem dokumentierten Vorschaden oder wenn eine
                dritte Partei die Zahl akzeptieren muss. Sagen Sie am Telefon kurz, worum es geht.
                Wenn wir denken, dass es sich für Sie nicht rechnet, sagen wir das.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 · FAQ ============ */}
      <section className="px-5 py-20 md:py-24 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4" data-reveal>
            <span className="font-display font-black text-[#E11D2F] text-[15px]">05</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/40 uppercase">FAQ</span>
          </div>
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-12" data-reveal>
            Häufige Fragen zum Wertgutachten.
          </h2>
          <FaqListe faqs={faqs} />
        </div>
      </section>

      {/* ============ WEITERE LEISTUNGEN ============ */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.3em] text-white/35 uppercase text-center mb-8" data-reveal>
            Ebenfalls für Sie
          </p>
          <div className="grid sm:grid-cols-3 gap-3" data-reveal>
            {[
              { href: "/schadengutachten", label: "Schadengutachten", sub: "Nach einem Unfall" },
              { href: "/wertminderung", label: "Wertminderung", sub: "Verlust nach Reparatur" },
              { href: "/restwertermittlung", label: "Restwertermittlung", sub: "Wert nach Totalschaden" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#E11D2F]/40 rounded-xl p-5 transition-all hover:-translate-y-0.5"
              >
                <p className="font-display font-bold text-[15.5px] mb-1 group-hover:text-[#E11D2F] transition-colors">{l.label}</p>
                <p className="text-white/40 text-[12.5px]">{l.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative px-5 py-20 md:py-24 border-t border-white/6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E11D2F]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,44px)] leading-[1.08] mb-4">
            Wir nennen Ihnen vorab den Preis.
          </h2>
          <p className="text-white/50 text-[16px] mb-8 leading-relaxed">
            Sagen Sie uns kurz, um welches Fahrzeug es geht und wofür Sie die Bewertung brauchen.
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
              Kostenlos beraten lassen
            </a>
          </div>
        </div>
      </section>

      <FooterNeu />
    </main>
  );
}
