"use client";

import { useState } from "react";
import type { Video } from "@/lib/videos";

/**
 * Das Video-Raster für die Übersichtsseite /videos.
 *
 * Wie im VideoBlock lädt der Player erst auf Klick — hier ist es noch wichtiger,
 * weil auf dieser Seite fünfzehn Videos stehen. Fünfzehn iframes beim
 * Seitenaufruf wären ein knappes Dutzend Megabyte.
 *
 * Die Auszeichnung liegt bei dieser Seite nicht hier, sondern als CollectionPage
 * in page.tsx — sonst stünden dieselben Videos zweimal im Schema.
 */
export default function VideoGitter({ videos }: { videos: Video[] }) {
  const [offen, setOffen] = useState<string | null>(null);

  return (
    <section className="px-5 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {videos.map((v) => (
          <div
            key={v.id}
            className="relative rounded-2xl overflow-hidden bg-[#0d1119] border border-white/10 aspect-[9/16]"
          >
            {offen === v.id ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                title={v.titel}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setOffen(v.id)}
                aria-label={`Video abspielen: ${v.titel}`}
                className="group absolute inset-0 w-full h-full text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition group-hover:opacity-100"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <span className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#E11D2F] shadow-lg transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 translate-x-[2px] fill-white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="block text-white font-semibold text-[13px] leading-snug line-clamp-3">
                    {v.titel}
                  </span>
                  <span className="block text-white/50 text-[11px] mt-1">{v.sekunden} Sek.</span>
                </span>
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
