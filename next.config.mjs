/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wpapi.carrumdownsdental.com.au",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
   // Add caching headers for static assets
  async headers() {
    return [
      {
        // Cache all static files in .next/static (JS, CSS, chunks)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache any other static assets in public folder (CSS, JS, SVGs)
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/dental-bridges/",
        destination: "/service/crowns-and-bridge/",
        permanent: true,
      },
      {
        source: "/dental-implant/",
        destination: "/service/dental-implants/",
        permanent: true,
      },
      {
        source: "/dangers-and-side-effects-of-root-canal-treatment/",
        destination: "/service/root-canal/",
        permanent: true,
      },
      {
        source: "/get-painless-dental-treatment-at-skye",
        destination: "/dentist-in-skye/",
        permanent: true,
      },
      {
        source: "/get-the-best-dental-care-at-sandhurst",
        destination: "/dentist-in-sandhurst/",
        permanent: true,
      },
      {
        source: "/affordable-dental-services-at-patterson-lakes",
        destination: "/dentist-in-patterson-lakes/",
        permanent: true,
      },
      {
        source: "/we-are-your-go-to-dentist-in-cranbourne-west",
        destination: "/dentist-in-cranbourne-west/",
        permanent: true,
      },
      {
        source: "/looking-for-a-dentist-in-frankston-north",
        destination: "/dentist-in-frankston-north/",
        permanent: true,
      },
      {
        source: "/find-the-best-dentist-in-seaford",
        destination: "/dentist-in-seaford/",
        permanent: true,
      },
      {
        source: "/get-all-your-dental-needs-handled-in-lyndhurst",
        destination: "/dentist-in-lyndhurst/",
        permanent: true,
      },
      {
        source: "/affordable-dental-services-at-langwarrin",
        destination: "/dentist-in-langwarrin/",
        permanent: true,
      },
      {
        source: "/dental-crowns-and-bridges-long-lasting-solutions-for-teeth",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
