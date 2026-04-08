"use client";
import Script from "next/script";
import { Star } from "lucide-react";

export default function GoogleReviewsSection() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 mb-5">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} size={20} className="fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#080D14] uppercase tracking-tight leading-tight mb-3">
            Das sagen unsere <span className="text-[#E11D2F]">Kunden</span>
          </h2>
          <p className="text-gray-500 text-[16px]">
            Echte Bewertungen von Berliner Autofahrern — direkt von Google
          </p>
        </div>

        {/* Elfsight Widget */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-182ff50e-18df-4d85-8f17-c8c11eda18c5"
          data-elfsight-app-lazy
        />

      </div>
    </section>
  );
}
