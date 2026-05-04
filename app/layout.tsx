import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Dor | QA Engineer & Frontend Developer — Accra, Ghana",
  description:
    "Mid-level QA Engineer and WordPress Developer at Npontu Technologies, Accra Ghana — 2+ years delivering quality software across fintech, insurance, payroll, and e-commerce platforms.",
  keywords: [
    "QA Engineer Ghana",
    "Frontend Developer Accra",
    "WordPress Developer Ghana",
    "K6 Load Testing",
    "React Next.js",
    "Npontu Technologies",
    "PAYE SSNIT Testing",
    "Eganow Payment API",
    "William Dor",
  ],
  openGraph: {
    title: "William Dor | QA Engineer & WordPress Developer — Accra, Ghana",
    description:
      "2+ years of fintech QA, load testing, WordPress development, and frontend engineering in Ghana.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f0f0f0]"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
