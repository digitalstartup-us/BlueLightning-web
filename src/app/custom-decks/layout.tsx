import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Decks | Trex & TimberTech Certified — Ashburn, McLean, Northern Virginia",
  description:
    "Blue Lightning Decks & Patios builds multi-level decks, pool decks, covered decks, and rooftop decks using Trex, TimberTech, and AZEK materials. Class A Contractor, Northern Virginia. Free 3D design consultation.",
};

export default function CustomDecksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
