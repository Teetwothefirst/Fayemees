import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FAYEMEES — Multi-Concept Lifestyle Brand",
  description: "Official website for FAYEMEES: Etana Beauty Salon, Eddy's Barber, Market Place, and 4F's Restaurant. Discover the art of sophisticated living in Lagos.",
  keywords: ["Fayeemees", "Etana Beauty Salon", "Eddy's Barber", "Lagos Lifestyle", "Nigerian Luxury", "Lekki Salon", "Premium Grooming"],
  openGraph: {
    title: "FAYEMEES — Multi-Concept Lifestyle Brand",
    description: "The official gateway to premium grooming, beauty, curated trade, and fine dining.",
    url: "https://fayeemees.com",
    siteName: "FAYEMEES",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAYEMEES — Multi-Concept Lifestyle Brand",
    description: "Nigeria's premier multi-concept lifestyle destination.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-charcoal min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-[73px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
