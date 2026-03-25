export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluelightning.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "BlueLightning Luxury Decks",
    description:
      "BlueLightning builds extraordinary luxury decks, pergolas, outdoor kitchens, and custom outdoor living spaces with premium craftsmanship and world-class design.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+15559006325",
    email: "hello@bluelightning.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Sunset Blvd",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90001",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Living Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Signature Decks", description: "Custom luxury decks built with exotic hardwoods and premium composite materials." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Pergolas & Pavilions", description: "Architectural overhead structures creating defined outdoor rooms." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Outdoor Kitchens", description: "Professional-grade outdoor kitchens with premium appliances and stone countertops." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Fire & Water Features", description: "Custom fire pits, fireplaces, fountains, and water walls." },
        },
      ],
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.0522,
        longitude: -118.2437,
      },
      geoRadius: "160000",
    },
    sameAs: [
      "https://www.instagram.com/bluelightningdecks",
      "https://www.facebook.com/bluelightningdecks",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
