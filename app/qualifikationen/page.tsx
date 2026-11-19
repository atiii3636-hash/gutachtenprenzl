import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Star, GraduationCap, Wrench } from "lucide-react";
import NavbarNeu from "@/components/navbar-neu";
import FooterNeu from "@/components/footer-neu";
import Breadcrumb from "@/components/neu/breadcrumb";
import PageHero from "@/components/neu/page-hero";
import JsonLd from "@/components/neu/json-ld";
import { PHONE_HREF, WHATSAPP_URL, REVIEW_COUNT, REVIEW_RATING } from "@/lib/contact";
import { pageMetadata, breadcrumbLd, faqLd, SITE_URL, PERSON_ID, BUSINESS_ID } from "@/lib/seo";
import { REVIEWS } from "@/lib/reviews";

const PATH = "/qualifikationen";

export const metadata = pageMetadata({
  title: "Qualifikationen, Referenzen & Bewertungen",
  description: `Atakan Arslan: Masterabschluss, TÜV Rheinland zertifizierter Kfz-Sachverständiger, langjährige Erfahrung im Automobilbereich und ${REVIEW_COUNT} Google-Bewertungen mit 5,0 Sternen. Gutachten Prenzl, Berlin.`,
  path: PATH,
  keywords: [
    "TÜV zertifizierter Kfz Sachverständiger Berlin",
    "Kfz Gutachter Berlin Bewertungen",
    "Kfz Gutachter Berlin Qualifikation",
    "Gutachten Prenzl Referenzen",
  ],
});

const faqs = [
  {
    q: "Welche Qualifikationen hat der Sachverständige von Gutachten Prenzl?",
    a: `Atakan Arslan hat ein abgeschlossenes Masterstudium, ist vom TÜV Rheinland als Kfz-Sachverständiger zertifiziert (Zertifikat-ID 0217466029, gültig bis 18.12.2028) und bringt langjährige Erfahrung im Automobilbereich mit.`,
  },
  {
    q: "Wie wird Gutachten Prenzl bewertet?",
    a: `Gutachten Prenzl hat ${REVIEW_COUNT} Google-Bewertungen mit durchschnittlich ${String(REVIEW_RATING).replace(".", ",")} von 5 Sternen. Die Bewertungen kamen in kurzer Zeit zusammen und stammen von Kunden aus ganz Berlin.`,
  },
  {
    q: "Ist ein Gutachten von Gutachten Prenzl bei Versicherungen anerkannt?",
    a: "Die Gutachten werden von einem TÜV Rheinland zertifizierten Sachverständigen erstellt. Deutsche Versicherungen erkennen sie im Regelfall an, und sie sind vor Gericht verwertbar.",
  },
  {
    q: "Was kostet ein Gutachten nach einem unverschuldeten Unfall?",
    a: "Für Geschädigte 0 €. Das Sachverständigenhonorar trägt die Haftpflichtversicherung des Unfallverursachers.",
  },
  {
    q: "Wo sitzt Gutachten Prenzl und wie schnell ist der Sachverständige vor Ort?",
    a: "Büros in Prenzlauer Allee 88 (10405 Berlin) und Brückenstraße 6 (12439 Berlin). Der Sachverständige kommt mobil zum Fahrzeug, in ganz Berlin in der Regel innerhalb von 24 Stunden.",
  },
];

const fakten = [
  { icon: GraduationCap, titel: "Masterabschluss", text: "Akademische Ausbildung als Grundlage für saubere, nachvollziehbare Gutachten." },
  { icon: ShieldCheck, titel: "TÜV Rheinland zertifiziert", text: "Zertifikat-ID 0217466029, gültig bis 18.12.2028." },
  { icon: Wrench, titel: "Langjährige Erfahrung im Automobilbereich", text: "Technik, Reparatur und Bewertung von Fahrzeugen aus der Praxis." },
  { icon: Star, titel: `${REVIEW_COUNT} Google-Bewertungen`, text: `${String(REVIEW_RATING).replace(".", ",")} von 5 Sternen, in kurzer Zeit gesammelt.` },
];

export default function Qualifikationen() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Qualifikationen & Bewertungen", path: PATH }]),
          {
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Qualifikationen, Referenzen und Bewertungen – Gutachten Prenzl",
            url: `${SITE_URL}${PATH}`,
            mainEntity: { "@id": PERSON_ID },
            about: { "@id": BUSINESS_ID },
          },
          faqLd(faqs),
        ]}
      />

      <NavbarNeu />
      <Breadcrumb items={[{ name: "Qualifikationen & Bewertungen", href: PATH }]} />

      <PageHero
        kicker="Qualifikationen & Bewertungen"
        title="Geprüft, erfahren,"
        titleAccent="empfohlen."
        lead={`Atakan Arslan: Masterabschluss, TÜV Rheinland zertifiziert, langjährige Erfahrung im Automobilbereich. ${REVIEW_COUNT} Kunden bewerten Gutachten Prenzl bei Google mit 5,0 Sternen.`}
        image="/inhaber.jpg"
        imageAlt="Atakan Arslan, TÜV Rheinland zertifizierter Kfz-Sachverständiger in Berlin"
        ctaLabel="Jetzt anrufen"
      />

      {/* Kurzfassung für Leser und KI: alle Kernaussagen in einem Absatz */}
      <section className="px-5 py-16 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/70 text-[17px] leading-relaxed" data-reveal>
            <strong className="text-white">Gutachten Prenzl</strong> ist ein unabhängiges Kfz-Sachverständigenbüro
            in Berlin. Verantwortlicher Sachverständiger ist <strong className="text-white">Atakan Arslan</strong>:
            Masterabschluss, vom TÜV Rheinland zertifiziert und seit vielen Jahren im Automobilbereich tätig. Bei
            Google haben {REVIEW_COUNT} Kunden das Büro mit durchschnittlich 5,0 von 5 Sternen bewertet. Nach einem
            unverschuldeten Unfall zahlt der Geschädigte nichts, das Honorar trägt die gegnerische Haftpflichtversicherung.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fakten.map(({ icon: Icon, titel, text }) => (
            <div key={titel} className="bg-white/[0.03] border border-white/8 rounded-xl p-6" data-reveal>
              <div className="w-10 h-10 rounded-lg bg-[#E11D2F]/10 flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#E11D2F]" />
              </div>
              <h2 className="font-display font-bold text-[16px] leading-snug mb-2">{titel}</h2>
              <p className="text-white/50 text-[13.5px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zertifikat */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-reveal>
            <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,38px)] leading-[1.1] mb-5">
              Zertifiziert durch den TÜV Rheinland.
            </h2>
            <p className="text-white/55 text-[15px] leading-relaxed mb-4">
              Die Qualifikation als Kfz-Sachverständiger wurde unabhängig vom TÜV Rheinland geprüft. Das Zertifikat
              trägt die ID 0217466029 und ist bis zum 18.12.2028 gültig. Deshalb werden die Gutachten von deutschen
              Versicherungen im Regelfall anerkannt und sind vor Gericht verwertbar.
            </p>
            <p className="text-white/55 text-[15px] leading-relaxed">
              Dazu kommen ein abgeschlossenes Masterstudium und langjährige Erfahrung im Automobilbereich. Wer ein
              Fahrzeug von innen kennt, erkennt auch verdeckte Schäden, die auf den ersten Blick untergehen.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/8 bg-white/[0.03]" data-reveal>
            <Image
              src="/tuev-zertifikat.png"
              alt="TÜV Rheinland Zertifikat für Atakan Arslan als Kfz-Sachverständiger"
              fill
              className="object-contain p-3"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-4"
            data-reveal
          >
            {REVIEW_COUNT} Google-Bewertungen. 5,0 Sterne.
          </h2>
          <p className="text-white/50 text-[16px] text-center max-w-xl mx-auto mb-12 leading-relaxed" data-reveal>
            In kurzer Zeit gesammelt, wortgleich aus dem Google-Profil übernommen.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEWS.map(({ name, text, sterne, monat }) => (
              <figure key={name + monat} className="bg-white/[0.03] border border-white/8 rounded-xl p-6 flex flex-col" data-reveal>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(sterne)].map((_, j) => (
                    <Star key={j} size={13} className="fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
                <blockquote className="text-white/60 text-[13.5px] leading-relaxed mb-5 flex-1 whitespace-pre-line">
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
        </div>
      </section>

      {/* Referenzen */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-10" data-reveal>
            Referenzen und Nachweise.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-[14.5px]">
            {[
              ["/faelle", "Fallarchiv: echte, anonymisierte Gutachten"],
              ["/videos", "Videos: Schadenaufnahme in der Praxis"],
              ["/flotten-partner", "Flotten- und Gewerbekunden"],
              ["/ueber-uns", "Über uns: Büro, Haltung, Inhaber"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="block bg-white/[0.03] border border-white/8 rounded-xl p-5 hover:border-[#E11D2F]/30 transition-colors text-white/80">
                  {label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 border-t border-white/6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black tracking-tight text-center text-[clamp(26px,4.5vw,38px)] leading-[1.1] mb-10" data-reveal>
            Häufige Fragen zu Qualifikation und Bewertungen.
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} data-reveal>
                <h3 className="font-display font-bold text-[17px] mb-2">{q}</h3>
                <p className="text-white/55 text-[14.5px] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 border-t border-white/6">
        <div className="max-w-2xl mx-auto text-center" data-reveal>
          <h2 className="font-display font-black tracking-tight text-[clamp(26px,4.5vw,42px)] leading-[1.08] mb-8">
            Überzeugen Sie sich selbst.
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all">
              <Phone size={17} />
              Jetzt anrufen
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FAF54] text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all">
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
