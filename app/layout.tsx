import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peterfoeng.com";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peter Foeng | Senior Software Engineer",
    template: "%s | Peter Foeng",
  },
  description:
    "Peter Foeng is a Melbourne-based Senior Software Engineer focused on front-end architecture, design systems, accessibility, and high-performance digital experiences.",
  applicationName: "Peter Foeng",
  authors: [{ name: "Peter Foeng" }],
  creator: "Peter Foeng",
  publisher: "Peter Foeng",
  keywords: [
    "Peter Foeng",
    "Senior Software Engineer",
    "Frontend Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Design Systems",
    "Accessibility",
    "Melbourne",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "Peter Foeng",
    title: "Peter Foeng | Senior Software Engineer",
    description:
      "Melbourne-based Senior Software Engineer building accessible, high-performance digital experiences with React, Next.js, and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Foeng | Senior Software Engineer",
    description:
      "Frontend-focused engineering, design systems, accessibility, and high-performance digital experiences.",
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
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
