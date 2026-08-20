"use client";
import Image from "next/image";

const photos = [
  { src: "/inhaber2.jpg", alt: "KFZ Sachverständiger Gutachten Prenzl – Schadensaufnahme vor Ort" },
  { src: "/foto6.jpg",    alt: "Gutachten Prenzl – Büro Prenzlauer Berg" },
  { src: "/buero.jpg",    alt: "Büro Innenansicht – Gutachten Prenzl" },
  { src: "/foto7.jpg",    alt: "KFZ Begutachtung – Motorraum Inspektion" },
  { src: "/foto2.jpg",    alt: "Fahrzeugbegutachtung Prenzlauer Berg" },
  { src: "/foto3.jpg",    alt: "KFZ Sachverständiger Berlin – Unfall" },
  { src: "/foto4.jpg",    alt: "Schadensaufnahme – Gutachten Prenzl" },
  { src: "/foto5.jpg",    alt: "Professionelle Fahrzeuginspektion Berlin" },
  { src: "/foto8.jpg",    alt: "KFZ Gutachter Berlin – Werkstatt" },
  { src: "/foto9.jpg",    alt: "Unfallgutachten Berlin – Vor Ort Termin" },
  { src: "/foto10.jpg",   alt: "Gutachten Prenzl – Fahrzeugbewertung" },
];

export default function PhotoGallerySection() {
  return (
    <section className="py-16 md:py-20 bg-[#080D14] overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
        <span className="inline-flex items-center gap-2 bg-[#E11D2F]/10 border border-[#E11D2F]/25 text-[#E11D2F] text-[13px] font-bold px-4 py-1.5 rounded-full mb-4">
          Eindrücke
        </span>
        <h2 className="font-display font-extrabold text-white tracking-tight text-3xl md:text-[42px]">
          Unser Büro & Arbeit vor Ort
        </h2>
      </div>

      {/* Scrollable strip */}
      <div className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide snap-x snap-mandatory"
           style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {photos.map(({ src, alt }) => (
          <div
            key={src}
            className="relative flex-shrink-0 snap-start w-72 md:w-80 h-52 md:h-60 rounded-2xl overflow-hidden border border-white/8"
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 288px, 320px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
        {/* right padding spacer */}
        <div className="flex-shrink-0 w-1" />
      </div>
    </section>
  );
}
