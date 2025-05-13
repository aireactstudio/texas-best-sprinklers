'use client';

import React from 'react';

interface ServicePageSchemaProps {
  serviceName: string;      // e.g., "Drainage Solutions"
  serviceType: string;      // e.g., "Drainage System Installation"
  serviceSlug: string;      // e.g., "drainage-solutions"
  city: string;             // e.g., "Fort Worth"
  locationSlug: string;     // e.g., "fort-worth"
  description: string;      // Meta description
  price?: string;           // Starting price (optional)
  imageUrl?: string;        // Service image URL (optional)
}

/**
 * Generates structured data specifically for service+location pages
 * Includes BreadcrumbList and Service schemas
 */
export default function ServicePageSchema({
  serviceName,
  serviceType,
  serviceSlug,
  city,
  locationSlug,
  description,
  price,
  imageUrl
}: ServicePageSchemaProps) {
  
  // Create BreadcrumbList schema
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sprinklersanddrains.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sprinklersanddrains.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": `https://sprinklersanddrains.com/services/${serviceSlug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": `${serviceName} in ${city}`,
        "item": `https://sprinklersanddrains.com/services/${serviceSlug}/${locationSlug}`
      }
    ]
  };

  // Create Service schema
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} in ${city}`,
    "serviceType": serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Texas Best Sprinklers",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Worth",
        "addressRegion": "TX",
        "postalCode": "76177",
        "streetAddress": "10011 Harmon Rd suite 133"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "sameAs": `https://en.wikipedia.org/wiki/${city.replace(/\s+/g, '_')},_Texas`
    },
    "description": description,
    "offers": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD"
    } : undefined,
    "image": imageUrl || "https://sprinklersanddrains.com/images/logo.png",
    "url": `https://sprinklersanddrains.com/services/${serviceSlug}/${locationSlug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  );
}
