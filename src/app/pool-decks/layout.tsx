import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Decks",
  description:
    "Custom luxury pool decks crafted with premium hardwoods and composite materials. BlueLightning transforms your pool area into an extraordinary outdoor sanctuary with precision engineering and world-class design.",
  keywords: [
    "pool decks",
    "luxury pool deck",
    "custom pool deck",
    "pool deck builder",
    "pool deck design",
    "outdoor pool area",
    "BlueLightning pool decks",
  ],
  openGraph: {
    title: "Luxury Pool Decks | BlueLightning",
    description:
      "Custom luxury pool decks crafted with precision and artistry. Premium hardwoods, composite materials, and world-class design.",
    images: [
      {
        url: "/og-pool-decks.jpg",
        width: 1200,
        height: 630,
        alt: "BlueLightning Luxury Pool Decks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Pool Decks | BlueLightning",
    description: "Custom luxury pool decks with premium craftsmanship.",
    images: ["/og-pool-decks.jpg"],
  },
};

export default function PoolDecksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
