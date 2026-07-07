import type { Metadata } from "next";
import { Cormorant_Garamond, Mukta } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: '--font-cormorant',
});

const mukta = Mukta({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-mukta',
});

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

export const metadata: Metadata = {
  title: "Thikana Poshak | Authentic Rajasthani Wear in Pali",
  description: "Discover the finest authentic Rajasthani poshak, suits, and sarees in Pali. Explore our collection of premium traditional wear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mukta.variable} ${cormorant.variable}`}>
      <body className="font-sans text-charcoal bg-[#FBF3E7]">
        <AnnouncementBar />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
