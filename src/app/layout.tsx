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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluelightning.us";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blue Lightning Custom Decks | Deck Builder Northern Virginia",
    template: "%s | Blue Lightning Custom Decks",
  },
  description:
    "Blue Lightning Custom Decks — Class A Contractor, Trex & TimberTech Certified. Custom decks, patios, pergolas & full outdoor living systems in Ashburn, McLean, Loudoun County & Fairfax, VA. Projects start at $100K. Free 3D design consultation.",
  keywords: [
    "deck builder Northern Virginia",
    "custom deck contractor Ashburn VA",
    "deck builder McLean VA",
    "outdoor living contractor Loudoun County",
    "composite deck installation Fairfax VA",
    "TimberTech deck builder Virginia",
    "Trex certified contractor Northern Virginia",
    "patio contractor Northern Virginia",
    "pergola builder Virginia",
    "outdoor kitchen contractor DMV",
    "luxury deck builder Washington DC",
    "covered deck contractor Virginia",
    "Blue Lightning Custom Decks",
    "Herndon deck builder",
    "Sterling VA deck contractor",
  ],
  authors: [{ name: "Blue Lightning Custom Decks LLC" }],
  creator: "Blue Lightning Custom Decks LLC",
  publisher: "Blue Lightning Custom Decks LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Blue Lightning Custom Decks",
    title: "Blue Lightning Custom Decks | Northern Virginia Deck Builder",
    description:
      "Class A Licensed · Trex & TimberTech Certified · Custom decks, patios, and full outdoor living systems across Northern Virginia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Lightning Custom Decks — Northern Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Lightning Custom Decks | Northern Virginia",
    description:
      "Custom decks, patios, pergolas & full outdoor living systems. Class A Contractor. Ashburn, McLean, Loudoun County, Fairfax VA.",
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
