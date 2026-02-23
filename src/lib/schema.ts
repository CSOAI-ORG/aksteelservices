// Schema.org structured data helpers for SEO

const AK_STEEL_PROVIDER = {
  "@type": "LocalBusiness",
  "name": "AK Steel Services",
  "telephone": "01474550531",
  "email": "info@aksteelservices.com",
  "url": "https://aksteelservices.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit A, Wharf Road",
    "addressLocality": "Gravesend",
    "addressRegion": "Kent",
    "postalCode": "DA12 2RU",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.4416",
    "longitude": "0.3706"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47"
  },
  "openingHours": ["Mo-Fr 07:30-17:00", "Sa 07:00-13:00"],
  "priceRange": "££"
};

export function createServiceSchema(name: string, description: string, areaServed: string[] = ["Kent", "London", "South East England"]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": AK_STEEL_PROVIDER,
    "areaServed": areaServed.map(area => ({ "@type": "Place", "name": area })),
    "serviceType": name,
  };
}

export function createFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    ...AK_STEEL_PROVIDER,
  };
}

export function combineSchemas(...schemas: object[]) {
  return schemas;
}
