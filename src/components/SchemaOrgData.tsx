'use client';

import { SITE_CONFIG } from '@/config/site';

/**
 * SchemaOrgData component
 * This adds JSON-LD schema.org markup to improve search engine understanding of the business
 */
const SchemaOrgData = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sprinkleranddrains.com',
    'name': SITE_CONFIG.shortName,
    'legalName': SITE_CONFIG.legalName,
    'alternateName': SITE_CONFIG.shortName,
    'url': 'https://sprinkleranddrains.com',
    'logo': 'https://sprinkleranddrains.com/logo.png',
    'image': 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public',
    'description': 'Professional sprinkler, drainage, and lighting services in Fort Worth and Weatherford, TX. Expert installation, repair, and maintenance for residential and commercial properties.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Fort Worth',
      'addressRegion': 'TX',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 32.7555,
      'longitude': -97.3308
    },
    'priceRange': '$$',
    'telephone': '+1-817-405-9411',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '08:00',
      'closes': '17:00'
    },
    'sameAs': [
      'https://www.facebook.com/texasbestsprinklers',
      'https://www.instagram.com/texasbestsprinklers'
    ],
    'areaServed': [
      'Fort Worth',
      'Arlington',
      'Keller',
      'Southlake',
      'Colleyville',
      'Grapevine',
      'North Richland Hills',
      'Weatherford'
    ],
    'serviceType': [
      'Irrigation Repair',
      'Sprinkler Installation',
      'Drainage Solutions',
      'Outdoor Lighting',
      'Landscape Lighting',
      'Maintenance'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};

export default SchemaOrgData;
