import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Domowy Lekarz - Konsultacje medyczne online",
  description: "Profesjonalne konsultacje medyczne online z doświadczonymi lekarzami. Szybko, bezpiecznie i wygodnie z domu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
