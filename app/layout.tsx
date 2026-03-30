import type { Metadata } from "next";
import "./globals.css";
import { COMPANY } from "@/lib/data/content";

export const metadata: Metadata = {
  title: `${COMPANY.name} - Malerarbeiten im Raum Luzern`,
  description: "Mit über 16 Jahren Erfahrung gestaltet die Maler Patrick Felder GmbH Ihr Zuhause. Beratung bis Umsetzung im Raum Luzern – Farbe, Stil, Qualität.",
  keywords: ["Maler", "Luzern", "Renovation", "Fassade", "Innenrenovation", "Tapezierarbeiten", "Schimmelbehandlung"],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  metadataBase: new URL(COMPANY.contact.website),
  openGraph: {
    title: `${COMPANY.name} - Malerarbeiten im Raum Luzern`,
    description: "Mit über 16 Jahren Erfahrung gestaltet die Maler Patrick Felder GmbH Ihr Zuhause.",
    url: COMPANY.contact.website,
    siteName: COMPANY.name,
    locale: "de_CH",
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
      lang="de-CH"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[rgb(var(--paper))] text-[rgb(var(--ink))]">
        {children}
      </body>
    </html>
  );
}
