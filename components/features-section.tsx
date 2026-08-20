import { Check, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "TÜV-zertifiziert & unabhängig",
    desc: "Keine Abhängigkeit von Versicherungen oder Werkstätten.",
  },
  {
    title: "Persönlicher Ansprechpartner",
    desc: "Sie sprechen direkt mit dem zertifizierten Sachverständigen — kein Callcenter.",
  },
  {
    title: "Direktübermittlung an die Versicherung",
    desc: "Das Gutachten geht direkt von uns an die Versicherung.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="vorteile" className="py-16 md:py-24 px-5 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – text */}
          <div data-reveal>
            <h2 className="font-display font-extrabold text-[#080D14] tracking-tight text-3xl md:text-[40px] leading-tight mb-5">
              Ihr unabhängiger KFZ Sachverständiger in Berlin
            </h2>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              TÜV Rheinland zertifiziert, mit Büro in der{" "}
              <Link
                href="/kfz-sachverstaendiger-berlin-prenzlauer-berg"
                className="text-[#080D14] font-semibold hover:text-[#E11D2F] transition-colors underline underline-offset-2 decoration-gray-300"
              >
                Prenzlauer Allee 88
              </Link>{" "}
              — unabhängig von Versicherungen und Werkstätten, damit Sie sich zu 100 % auf uns verlassen können.
            </p>

            <div className="space-y-6 mb-8">
              {features.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#E11D2F]/10 flex items-center justify-center flex-shrink-0">
                    <Check size={15} className="text-[#E11D2F] stroke-[3]" />
                  </span>
                  <div>
                    <p className="font-bold text-[#080D14] text-[15px] mb-0.5">{title}</p>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* TÜV certificate card */}
            <div className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-center gap-4 mb-8">
              <Image
                src="/tuev-zertifikat.png"
                alt="TÜV Rheinland Zertifikat – Geprüfte Qualifikation, gültig bis 18.12.2028"
                width={600}
                height={220}
                className="h-10 w-auto object-contain"
              />
              <div className="w-px h-10 bg-gray-200 flex-shrink-0" />
              <p className="text-[12px] text-gray-500 leading-snug">
                <span className="font-bold text-[#080D14]">TÜV Rheinland</span>
                <br />
                <span className="font-bold text-[#080D14]">Geprüfte Qualifikation</span> — gültig bis 18.12.2028
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+4915560003661"
                className="inline-flex items-center gap-2 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[14px] px-6 py-3.5 rounded-full shadow-lg shadow-[#E11D2F]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={14} />
                Jetzt anrufen
              </a>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-[#080D14] font-semibold text-[14px] px-6 py-3.5 rounded-full transition-all"
              >
                Mehr über uns →
              </Link>
            </div>
          </div>

          {/* Right – Schadensaufnahme-Foto */}
          <div className="relative" data-reveal style={{ transitionDelay: "120ms" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-gray-200 h-80 sm:h-[440px] lg:h-[560px]">
              <Image
                src="/inhaber2.jpg"
                alt="KFZ Sachverständiger Gutachten Prenzl – Schadensaufnahme vor Ort in Berlin"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
