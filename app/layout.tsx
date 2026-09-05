import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chicosolarcleaners.com"),

  title: {
    default: "Solar Panel Cleaning in Chico, CA | Chico Solar Cleaners",
    template: "%s | Chico Solar Cleaners",
  },

  description:
    "Professional solar panel cleaning, bird proofing, and window cleaning in Chico, CA and surrounding communities. Restore your panels' performance and keep your property looking clean.",

alternates: {
  canonical: "https://www.chicosolarcleaners.com",
},

  openGraph: {
    title: "Solar Panel Cleaning in Chico, CA | Chico Solar Cleaners",
    description:
      "Professional solar panel cleaning, bird proofing, and window cleaning in Chico, CA and surrounding communities.",
    url: "https://chicosolarcleaners.com",
    siteName: "Chico Solar Cleaners",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}