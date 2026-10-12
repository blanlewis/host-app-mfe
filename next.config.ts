import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    return [
      {
        source: "/bookings",
        destination: "https://bookings-app-mfe.onrender.com/bookings"
      },
      {
        source: "/bookings/:path*",
        destination: "https://bookings-app-mfe.onrender.com/bookings/:path*"
      },
      {
        source: "/fleet",
        destination: "https://fleet-app-mfe.onrender.com/fleet",
      },
      {
        source: "/fleet/:path*",
        destination: "https://fleet-app-mfe.onrender.com/fleet/:path*",
      },
      {
        source: "/reports",
        destination: "https://reports-app-mfe.onrender.com/reports",
      },
      {
        source: "/reports/:path*",
        destination: "https://reports-app-mfe.onrender.com/reports/:path*",
      },
    ];
  },

};

export default nextConfig;
