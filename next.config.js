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
    ];
  },
};

module.exports = nextConfig;
