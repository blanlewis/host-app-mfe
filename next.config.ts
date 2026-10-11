import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/bookings",
        destination: "http://localhost:5006/bookings",
      },
      {
        source: "/bookings/:path*",
        destination: "http://localhost:5006/bookings/:path*",
      },
      {
        source: "/fleet",
        destination: "http://localhost:5007/fleet",
      },
      {
        source: "/fleet/:path*",
        destination: "http://localhost:5007/fleet/:path*",
      },
      {
        source: "/reports",
        destination: "http://localhost:5008/reports",
      },
      {
        source: "/reports/:path*",
        destination: "http://localhost:5008/reports/:path*",
      },
    ];
  },

};

export default nextConfig;
