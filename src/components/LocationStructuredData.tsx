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
        "@id": "https://texasbestsprinklers.com/#business",
        "name": "Texas Best Sprinklers",
        "url": "https://texasbestsprinklers.com/",
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "$$",
        "image": "https://texasbestsprinklers.com/images/logo.png",
        "sameAs": [
          "https://www.facebook.com/texasbestsprinklers",
          "https://www.instagram.com/texasbestsprinklers"
        ]
      },
      {
        "@type": "Service",
        "name": `${city} ${serviceName}`,
        "serviceType": serviceType,
        "provider": {
          "@id": "https://texasbestsprinklers.com/#business"
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
          "name": `Texas Best Sprinklers - ${city} ${serviceName}`
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
            "item": "https://texasbestsprinklers.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://texasbestsprinklers.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": serviceName,
            "item": `https://texasbestsprinklers.com/services/${serviceSlug}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": `${city} ${serviceName}`,
            "item": `https://texasbestsprinklers.com/services/${serviceSlug}/${locationSlug}`
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
