import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";

type Props = {
  /** Kleiner Kicker über der Überschrift, z. B. "Leistungen". */
  kicker: string;
  /** H1 – erster Teil in Weiß. */
  title: string;
  /** Zweiter Teil der H1 in Rot. Optional. */
  titleAccent?: string;
  lead: string;
  /** Hintergrundfoto, unscharf und ausgeblendet wie auf der Startseite. */
  image?: string;
  /** Beschriftung des Haupt-Buttons. Standard: die Telefonnummer. */
  ctaLabel?: string;
};

export default function PageHero({
  kicker,
  title,
  titleAccent,
  lead,
  image,
  ctaLabel,
}: Props) {
  return (
    <section className="relative px-5 pt-10 pb-16 md:pt-14 md:pb-20 overflow-hidden">
      {image && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Vollflächig, nach unten auslaufend – wie im Hero der Startseite */}
          <div className="absolute inset-0 hero-fade-bottom opacity-[0.55]">
            <Image
              src={image}
              alt=""
              fill
              priority
              /* scale-110 kaschiert den transparenten Saum, den der Blur an den Kanten erzeugt */
              className="object-cover object-center blur-[4px] scale-110"
              sizes="100vw"
              quality={70}
            />
          </div>
          <div className="absolute inset-0 bg-[#050507]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507]" />
        </div>
      )}

      {/* Roter Schimmer, auch ohne Foto */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-[#E11D2F]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D2F]" />
          <span className="text-[10px] tracking-[0.2em] sm:text-[11px] sm:tracking-[0.32em] font-bold text-white/55 uppercase">
            {kicker}
          </span>
        </div>

        <h1
          className="font-display font-black tracking-tight leading-[1.06] text-[clamp(30px,6vw,52px)] mb-5 animate-fade-up"
          style={{ animationDelay: "70ms" }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className="text-[#E11D2F]">{titleAccent}</span>
            </>
          )}
        </h1>

        <p
          className="text-white/55 text-[16px] md:text-[17px] leading-relaxed max-w-xl mx-auto mb-8 animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          {lead}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up"
          style={{ animationDelay: "210ms" }}
        >
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2.5 bg-[#E11D2F] hover:bg-[#C11527] text-white font-bold text-[16px] px-8 py-4 rounded-lg shadow-[0_10px_40px_rgba(225,29,47,0.32)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={17} />
            {ctaLabel ?? PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-[16px] px-8 py-4 rounded-lg transition-all hover:-translate-y-0.5"
          >
            <MessageCircle size={17} className="text-[#25D366]" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
