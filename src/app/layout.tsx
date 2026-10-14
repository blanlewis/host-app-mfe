
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomSidebar } from "@blanlewis0/lewis-tms-shared-ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lewis TMS",
  description: "Lewis TMS application",
};



const navigationItems = [
  { label: "Dashboard", href: "/", icon: "🏠" },
  { label: "Bookings", href: "/bookings?source=host", icon: "📦" },
  { label: "Fleet", href: "/fleet?source=host", icon: "🚚" },
  { label: "Reports", href: "/reports?source=host", icon: "📊" },
];

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <CustomSidebar
            navigationItems={navigationItems}
            activeHref="/"
          />

          <main style={{ flex: 1, minWidth: 0 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}