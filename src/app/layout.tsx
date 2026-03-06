import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "1Cr Club - Financial Health Intelligence Platform",
  description:
    "Track your net worth, investments, assets, and liabilities with the 1Cr Club Financial Health Platform. Get your Financial Health Score and make smarter financial decisions.",
  keywords: [
    "financial health",
    "net worth tracking",
    "investment portfolio",
    "financial planning",
    "wealth management",
    "financial health score",
  ],
  openGraph: {
    title: "1Cr Club - Financial Health Intelligence Platform",
    description:
      "Track your net worth, investments, assets, and liabilities with the 1Cr Club Financial Health Platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <LenisProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
