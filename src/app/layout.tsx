import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaipur Startup Arena",
  description:
    "A shareable landing page for Jaipur's startup scene, founder energy, and early-stage hiring momentum.",
  openGraph: {
    title: "Jaipur Startup Arena",
    description:
      "A shareable landing page for Jaipur's startup scene, founder energy, and early-stage hiring momentum.",
    url: "https://jaipur-startup-arena.vercel.app/",
    siteName: "Jaipur Startup Arena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Startup Arena",
    description:
      "A shareable landing page for Jaipur's startup scene, founder energy, and early-stage hiring momentum.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
