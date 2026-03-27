import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Deck Builder Northern Virginia — Blue Lightning Decks & Patios",
  description:
    "Answers to the most common questions about custom deck and patio projects in Northern Virginia: cost, timeline, permits, materials, HOA, and more. Blue Lightning Decks & Patios.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
