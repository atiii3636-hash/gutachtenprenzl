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
  async headers() {
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
};

module.exports = nextConfig;
