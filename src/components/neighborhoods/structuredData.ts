interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewItem {
  reviewer: string;
  date: string;
  quote: string;
  location?: string;
  stars?: number;
}

interface GeoCoordinatesInput {
  latitude: number;
  longitude: number;
}

interface BuildNeighborhoodStructuredDataInput {
  canonical: string;
  neighborhoodName: string;
  pageTitle: string;
  description: string;
  faqItems?: FAQItem[];
  cityName?: string;
  geo?: GeoCoordinatesInput;
  serviceRadiusMiles?: number;
  reviews?: ReviewItem[];
}

export function buildNeighborhoodStructuredData({
  canonical,
  neighborhoodName,
  pageTitle,
  description,
  faqItems = [],
  cityName,
  geo,
  serviceRadiusMiles,
  reviews = []
}: BuildNeighborhoodStructuredDataInput) {
  const baseUrl = 'https://sprinkleranddrains.com';
  const parts = canonical.replace(baseUrl, '').split('/').filter(Boolean);
  const citySlug = parts[0] || '';
  const resolvedCityName =
    cityName ||
    citySlug
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: resolvedCityName, item: `${baseUrl}/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: neighborhoodName, item: canonical }
    ]
  };

  const webpage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    url: canonical,
    description
  };

  const geoCoordinates = geo
    ? {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    : undefined;

  const geoCircle =
    geo && serviceRadiusMiles
      ? {
          '@type': 'GeoCircle',
          geoMidpoint: geoCoordinates,
          geoRadius: `${Math.round(serviceRadiusMiles * 1609.34)}`
        }
      : undefined;

  const areaServed = [
    {
      '@type': 'Place',
      name: neighborhoodName,
      ...(geoCoordinates ? { geo: geoCoordinates } : {})
    },
    {
      '@type': 'City',
      name: resolvedCityName,
      containedInPlace: {
        '@type': 'State',
        name: 'Texas'
      }
    },
    {
      '@type': 'State',
      name: 'Texas'
    }
  ];

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sprinkler, Irrigation, and Drainage Services',
    name: pageTitle,
    description,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Texas Best Sprinklers, Drainage and Lighting',
      telephone: '(817) 304-7896',
      url: baseUrl,
      identifier: 'LI22462'
    },
    areaServed
  };

  const reviewRatings = reviews.map((item) => item.stars ?? 5);
  const reviewCount = reviewRatings.length;
  const averageRating =
    reviewCount > 0
      ? (reviewRatings.reduce((sum, stars) => sum + stars, 0) / reviewCount).toFixed(1)
      : undefined;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Texas Best Sprinklers, Drainage and Lighting',
    telephone: '(817) 304-7896',
    url: baseUrl,
    identifier: 'LI22462',
    areaServed,
    ...(geoCoordinates ? { geo: geoCoordinates } : {}),
    ...(geoCircle ? { location: geoCircle } : {}),
    ...(reviewCount > 0
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: averageRating,
            reviewCount,
            ratingCount: reviewCount,
            bestRating: '5',
            worstRating: '1'
          },
          review: reviews.map((item) => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: item.reviewer
            },
            datePublished: item.date,
            reviewBody: item.quote,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: String(item.stars ?? 5),
              bestRating: '5',
              worstRating: '1'
            }
          }))
        }
      : {})
  };

  const faq =
    faqItems.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        }
      : null;

  return faq
    ? [breadcrumbs, webpage, service, localBusiness, faq]
    : [breadcrumbs, webpage, service, localBusiness];
}
