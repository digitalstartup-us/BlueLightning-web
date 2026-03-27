import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patio Contractor Northern Virginia | Techo-Bloc & Unilock Pavers",
  description:
    "Blue Lightning Decks & Patios builds stunning paver patios, stamped concrete, natural stone, and porcelain tile patios across Northern Virginia. Techo-Bloc, Unilock, built-in fire pits and outdoor kitchens. Free consultation.",
};

export default function PatiosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
