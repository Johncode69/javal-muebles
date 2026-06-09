import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ORIGEN STUDIO | Remodelaciones & Carpintería Arquitectónica",
  description:
    "Muebles de madera finos a medida. Diseño de interiores con materiales premium para espacios únicos.",
  keywords: "muebles madera, carpintería, remodelaciones, diseño interiores, muebles a medida",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${barlowCondensed.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#171719] text-white">
        <SmoothScroll />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
