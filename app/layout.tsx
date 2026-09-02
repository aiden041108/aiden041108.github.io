import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Junyoung Yang — AI Systems",
  description:
    "Portfolio of Junyoung Yang, a KAIST student designing general, adaptive, and efficient AI agents.",
  keywords: ["Junyoung Yang", "AI systems", "KAIST", "RAG", "agentic memory", "quant research"],
  authors: [{ name: "Junyoung Yang" }],
  openGraph: {
    title: "Junyoung Yang — AI Systems",
    description: "Building agents that think, act, and improve.",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Junyoung Yang — AI Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junyoung Yang — AI Systems",
    description: "Building agents that think, act, and improve.",
    images: ["/og-v2.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
