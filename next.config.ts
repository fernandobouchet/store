import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
    ],
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

export default nextConfig;
