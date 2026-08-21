import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chico Solar Cleaners",
    template: "%s | Chico Solar Cleaners",
  },
  description:
    "Professional solar panel cleaning, bird proofing, and window cleaning services in Chico and surrounding communities.",
  keywords: [
    "solar panel cleaning",
    "solar cleaning Chico",
    "bird proofing solar panels",
    "window cleaning Chico",
  ],
  openGraph: {
    title: "Chico Solar Cleaners",
    description:
      "Solar panel cleaning, bird proofing, and window cleaning in Chico and surrounding communities.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}