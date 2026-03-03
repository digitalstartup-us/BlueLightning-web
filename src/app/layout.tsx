import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Luxury Decks & Outdoor Living | Premium Outdoor Spaces",
  description:
    "Transform your outdoor space into a breathtaking sanctuary. Custom luxury decks, pergolas, and outdoor living areas crafted with precision and artistry.",
  keywords: "luxury decks, outdoor living, custom decks, pergolas, outdoor spaces, premium construction",
  openGraph: {
    title: "Luxury Decks & Outdoor Living",
    description: "Transform your outdoor space into a breathtaking sanctuary.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
