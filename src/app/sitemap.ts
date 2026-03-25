import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluelightning.us";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/custom-decks`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${baseUrl}/patios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.92 },
    { url: `${baseUrl}/pool-decks`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pergolas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${baseUrl}/outdoor-kitchens`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.88 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
  ];
}
