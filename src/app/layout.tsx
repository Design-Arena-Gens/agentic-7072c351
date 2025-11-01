import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Dream Student Hub | Learning Links for Every Goal",
  description:
    "Discover curated learning paths, course collections, and study tools crafted to help students plan and achieve their academic dreams.",
  openGraph: {
    title: "Dream Student Hub | Learning Links for Every Goal",
    description:
      "Browse structured paths, trusted course links, and productivity boosters made for ambitious students.",
    url: "https://agentic-7072c351.vercel.app",
    siteName: "Dream Student Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Student Hub | Learning Links for Every Goal",
    description:
      "A launchpad of curated courses, study planners, and tools for students ready to build their future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
