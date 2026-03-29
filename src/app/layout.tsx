import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaipur Startup Arena",
  description:
    "Find Jaipur startup companies, inspect their hiring lanes, and explore them on a live city map.",
  openGraph: {
    title: "Jaipur Startup Arena",
    description:
      "Find Jaipur startup companies, inspect their hiring lanes, and explore them on a live city map.",
    url: "https://jaipur-startup-arena.vercel.app/",
    siteName: "Jaipur Startup Arena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Startup Arena",
    description:
      "Find Jaipur startup companies, inspect their hiring lanes, and explore them on a live city map.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
