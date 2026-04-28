import type { NextConfig } from "next";

// Per the Next.js CSP guide (node_modules/next/dist/docs/01-app/02-guides/content-security-policy.md):
// For static sites, set CSP directly in next.config — nonces require dynamic
// rendering per-request, which defeats static generation.
// When this site gains authenticated pages, switch to the nonce + proxy approach.
const isDev = process.env.NODE_ENV === "development";

const cspHeader = [
  "default-src 'self'",
  // Next.js injects inline scripts during hydration; unsafe-inline is required
  // for static pages. unsafe-eval is only needed in development (React DevTools).
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // Unsplash is the only remote image source; next/font self-hosts Google Fonts
  "img-src 'self' blob: data: https://images.unsplash.com",
  "font-src 'self'",
  // YouTube embeds (blog posts) + OpenStreetMap (contact page)
  "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.openstreetmap.org",
  // Contact form POSTs to /api/contact — only same-origin fetches needed
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  // Prevent embedding this site in any third-party frame (replaces X-Frame-Options)
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
]
  .join("; ")
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          // Keep X-Frame-Options as a fallback for older browsers that don't
          // parse frame-ancestors in CSP. Both say "never embed this site".
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // 2-year max-age; add 'preload' once the domain is submitted to
            // the HSTS preload list at https://hstspreload.org
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
