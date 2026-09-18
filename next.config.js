/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bilder: AVIF + WebP automatisch, bessere Komprimierung
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 Jahr Cache für optimierte Bilder
    deviceSizes: [390, 640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // HTTP-Caching-Header für statische Assets
  // Nur in Produktion — im Dev-Modus würden die immutable-Header alte JS-Chunks
  // im Browser einfrieren (Hydration-Crashes, unsichtbare Änderungen).
  async headers() {
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: '/(.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*\\.(?:js|css|woff|woff2|ttf|otf))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Kompression aktivieren
  compress: true,

  // 301-Weiterleitungen für alte URLs (von Google noch gecrawlt → 404)
  // Next.js entfernt nachgestellte Slashes automatisch, daher genügt die Variante ohne Slash.
  async redirects() {
    return [
      {
        source: '/kfz-gutachter-friedrichshain',
        destination: '/kfz-sachverstaendiger-berlin-friedrichshain',
        permanent: true,
      },
      {
        source: '/kfz-gutachter-kreuzberg',
        destination: '/kfz-sachverstaendiger-berlin-kreuzberg',
        permanent: true,
      },
      {
        source: '/kfz-gutachter-pankow',
        destination: '/kfz-sachverstaendiger-berlin-pankow',
        permanent: true,
      },
      // Beide URLs sind noch in Googles Index, lieferten aber 404 (geprüft 02.08.2026).
      {
        source: '/kfz-gutachter-treptow-koepenick',
        destination: '/kfz-sachverstaendiger-berlin-koepenick',
        permanent: true,
      },
      {
        source: '/kfz-gutachter-prenzlauer-berg',
        destination: '/kfz-sachverstaendiger-berlin-prenzlauer-berg',
        permanent: true,
      },
      // Aus der Search Console am 21.08.2026: lieferten weiterhin 404.
      {
        source: '/kfz-gutachter-weissensee',
        destination: '/kfz-sachverstaendiger-berlin-weissensee',
        permanent: true,
      },
      {
        source: '/kfz-gutachten-nach-unfall',
        destination: '/unfallgutachten-berlin',
        permanent: true,
      },

      // --- SEO-Audit 21.08.2026, angepasst 18.09.2026 ---
      // /kfz-gutachter-berlin war von keiner Seite intern verlinkt und
      // konkurrierte mit der Startseite um "kfz gutachter berlin" (1.940
      // Impressionen), deshalb zunächst auf die Startseite zusammengelegt.
      // Seit es /kfz-gutachten-berlin gibt, ist das die passendere Zielseite:
      // gleiche Suchintention, und die Startseite muss nicht mehr für einen
      // Begriff mitranken, für den es jetzt eine eigene Seite gibt.
      {
        source: '/kfz-gutachter-berlin',
        destination: '/kfz-gutachten-berlin',
        permanent: true,
      },
      // Lichtenberg lief als einziger Bezirk auf dem alten URL-Muster und rankte
      // mit Ø-Position 20,2 deutlich schlechter als vergleichbare Bezirke.
      {
        source: '/kfz-gutachter-lichtenberg',
        destination: '/kfz-sachverstaendiger-berlin-lichtenberg',
        permanent: true,
      },

      // Die Design-Vorschau lag unter /neu/* auf der Live-Domain — ohne noindex
      // und ohne Disallow, Google konnte sie also crawlen. Seit dem Umzug auf die
      // echten URLs (20.08.2026) liefern alle /neu-Adressen 404.
      // /neu selbst braucht eine eigene Regel: über :path* mit null Segmenten
      // baut Next einen leeren Location-Header und die Weiterleitung läuft ins
      // Nichts (lokal geprüft). Exakte Regel steht daher zuerst.
      {
        source: '/neu',
        destination: '/',
        permanent: true,
      },
      {
        source: '/neu/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
