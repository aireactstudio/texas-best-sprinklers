'use client';

import React from 'react';
import Script from 'next/script';

export interface LocationDataProps {
  serviceName: string;
  serviceType: string;
  serviceSlug: string;
  city: string;
  locationSlug: string;
  description: string;
  price: string;
  ratingValue: string;
  reviewCount: string;
  testimonial?: {
    author: string;
    text: string;
    date?: string;
    rating: number;
  };
}

const LocationStructuredData: React.FC<LocationDataProps> = ({
  serviceName,
  serviceType,
  serviceSlug,
  city,
  locationSlug,
  description,
  price,
  ratingValue,
  reviewCount,
  testimonial
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sprinklersanddrains.com/#business",
        "name": "Texas Best Sprinklers",
        "url": "https://sprinklersanddrains.com/",
        "telephone": "(817) 304-7896",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "10011 Harmon Rd suite 133",
          "addressLocality": "Fort Worth",
          "addressRegion": "TX",
          "postalCode": "76177",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.8935,
          "longitude": -97.3045
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "19:00"
          }
        ],
        "priceRange": "$$",
        "image": "https://sprinklersanddrains.com/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/TexasBest1/",
          "https://www.instagram.com/texasbestoutdoorlighting/",
          "http://x.com/sprinklerdrains",
          "https://www.thumbtack.com/tx/fort-worth/sprinkler-systems-repair/texas-best-sprinklers-drainage-lighting-llc/service/260748333748118695"
        ]
      },
      {
        "@type": "Service",
        "name": `${serviceName} in ${city}`,
        "serviceType": serviceType,
        "provider": {
          "@id": "https://sprinklersanddrains.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": city,
          "sameAs": `https://en.wikipedia.org/wiki/${city.replace(' ', '_')},_Texas`
        },
        "description": description,
        "offers": {
          "@type": "Offer",
          "price": price,
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": price,
            "priceCurrency": "USD",
            "unitText": "service call"
          }
        },
        "termsOfService": "Prices may vary depending on the complexity of the service needed",
        "serviceOutput": `Fully functional and efficient ${serviceType.toLowerCase()} system`
      },
      {
        "@type": "AggregateRating",
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": `Texas Best Sprinklers - ${serviceName} in ${city}`
        },
        "ratingValue": ratingValue,
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": reviewCount,
        "reviewCount": reviewCount
      },
      testimonial && {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.author
        },
        "datePublished": testimonial.date || "2024-01-01",
        "reviewBody": testimonial.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": `${city} ${serviceName}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sprinklersanddrains.com/"
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
      }
    ].filter(Boolean)
  };

  return (
    <Script id={`structured-data-${locationSlug}`} type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default LocationStructuredData;
