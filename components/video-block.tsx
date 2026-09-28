"use client";

import { useState } from "react";
import { isoDauer, videosFuer, type Video } from "@/lib/videos";

/**
 * Videoblock für die Themenseiten.
 *
 * Zwei Dinge sind hier bewusst gelöst:
 *
 * 1. Der Player lädt erst auf Klick. Ein eingebettetes YouTube-iframe zieht
 *    beim Seitenaufruf rund eine halbe Megabyte nach und drückt die Core Web
 *    Vitals — genau die Kennzahl, die wir auf diesen Seiten nicht verlieren
 *    wollen. Vorher steht nur das Vorschaubild.
 * 2. Jedes Video bekommt eine VideoObject-Auszeichnung. Erst dadurch kann
 *    Google das Video dem Thema der Seite zuordnen und in der Suche als
 *    Videotreffer ausspielen.
 */

function Einbettung({ video }: { video: Video }) {
  const [an, setAn] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0d1119] border border-white/10 aspect-[9/16]">
      {an ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.titel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setAn(true)}
          aria-label={`Video abspielen: ${video.titel}`}
          className="group absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-80 transition group-hover:opacity-100 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#E11D2F] shadow-lg transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="w-7 h-7 translate-x-[2px] fill-white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-0 left-0 right-0 p-4 text-left">
            <span className="block text-white font-semibold text-sm leading-snug">
              {video.titel}
            </span>
            <span className="block text-white/60 text-xs mt-1">
              {video.sekunden} Sek. · Gutachten Prenzl
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export default function VideoBlock({
  slug,
  ueberschrift = "Im Video erklärt",
  einleitung,
}: {
  slug: string;
  ueberschrift?: string;
  einleitung?: string;
}) {
  const videos = videosFuer(slug);
  if (videos.length === 0) return null;

  const schema = videos.map((v) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.titel,
    description: v.beschreibung,
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    ],
    uploadDate: v.datum,
    duration: isoDauer(v.sekunden),
    contentUrl: `https://www.youtube.com/shorts/${v.id}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    publisher: {
      "@type": "Organization",
      name: "Gutachten Prenzl",
      url: "https://gutachtenprenzl.de",
    },
  }));

  return (
    <section className="px-5 py-14 bg-[#050507]">
      <div className="max-w-5xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-3">
          {ueberschrift}
        </h2>
        {einleitung && (
          <p className="text-white/60 text-sm md:text-base max-w-2xl mb-8">{einleitung}</p>
        )}
        <div
          className={`grid gap-5 ${
            videos.length === 1
              ? "max-w-[280px]"
              : videos.length === 2
                ? "grid-cols-2 max-w-xl"
                : "grid-cols-2 md:grid-cols-3 max-w-3xl"
          }`}
        >
          {videos.map((v) => (
            <Einbettung key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
