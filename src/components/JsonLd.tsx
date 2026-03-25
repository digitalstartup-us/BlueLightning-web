export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bluelightning.us";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "Blue Lightning Custom Decks LLC",
    description:
      "Blue Lightning Custom Decks is a Class A licensed, Trex and TimberTech certified design + build firm specializing in custom decks, patios, pergolas, and full outdoor living systems across Northern Virginia.",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: "+17034239965",
    email: "contact@bluelightningcustomdecks.com",
    foundingDate: "2019",
    legalName: "Blue Lightning Custom Decks LLC",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13800 Coppermine Road, 3rd Floor, Unit 351",
      addressLocality: "Herndon",
      addressRegion: "VA",
      postalCode: "20171",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9696,
      longitude: -77.3861,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "24",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outdoor Living Services — Northern Virginia",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Custom Decks", description: "Multi-level, pool, covered, and rooftop decks built with Trex, TimberTech, and AZEK." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Patios & Hardscaping", description: "Paver patios, natural stone, stamped concrete, and retaining walls using Techo-Bloc and Unilock." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Pergolas & Pavilions", description: "Louvered pergolas, screened porches, pavilions, and sunrooms." },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Full Outdoor Living Systems", description: "Complete backyard transformation: deck + patio + pergola + outdoor kitchen + lighting + audio." },
        },
      ],
    },
    areaServed: [
      { "@type": "City", name: "Ashburn", addressRegion: "VA" },
      { "@type": "City", name: "McLean", addressRegion: "VA" },
      { "@type": "City", name: "Herndon", addressRegion: "VA" },
      { "@type": "City", name: "Sterling", addressRegion: "VA" },
      { "@type": "County", name: "Loudoun County", addressRegion: "VA" },
      { "@type": "County", name: "Fairfax County", addressRegion: "VA" },
      { "@type": "County", name: "Prince William County", addressRegion: "VA" },
      { "@type": "City", name: "Arlington", addressRegion: "VA" },
    ],
    sameAs: [
      "https://www.instagram.com/bluelightningcustomdecks",
    ],
    knowsAbout: [
      "Custom Deck Building",
      "Trex Composite Decking",
      "TimberTech Composite Decking",
      "AZEK PVC Decking",
      "Paver Patio Installation",
      "Techo-Bloc Pavers",
      "Outdoor Kitchen Construction",
      "Pergola Construction",
      "Building Permits Virginia",
      "HOA Approval",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
