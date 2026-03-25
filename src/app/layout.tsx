import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/GoogleTagManager";
import JsonLd from "@/components/JsonLd";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluelightning.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlueLightning Luxury Decks | Premium Outdoor Living",
    template: "%s | BlueLightning Luxury Decks",
  },
  description:
    "BlueLightning builds extraordinary luxury decks, pergolas, outdoor kitchens, and custom outdoor living spaces. Premium craftsmanship, world-class design, and unmatched artistry.",
  keywords: [
    "luxury decks",
    "custom deck builder",
    "outdoor living",
    "pool decks",
    "pergolas",
    "outdoor kitchens",
    "fire features",
    "premium deck construction",
    "BlueLightning",
    "luxury outdoor spaces",
  ],
  authors: [{ name: "BlueLightning Luxury Decks" }],
  creator: "BlueLightning Luxury Decks",
  publisher: "BlueLightning Luxury Decks",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BlueLightning Luxury Decks",
    title: "BlueLightning Luxury Decks | Premium Outdoor Living",
    description:
      "Extraordinary luxury decks and outdoor living spaces crafted with precision and artistry.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BlueLightning Luxury Decks — Premium Outdoor Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueLightning Luxury Decks",
    description:
      "Premium custom decks, pergolas, outdoor kitchens, and outdoor living spaces.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D0D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <JsonLd />
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {children}
      </body>
    </html>
  );
}
