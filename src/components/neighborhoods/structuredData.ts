interface FAQItem {
  question: string;
  answer: string;
}

interface BuildNeighborhoodStructuredDataInput {
  canonical: string;
  neighborhoodName: string;
  pageTitle: string;
  description: string;
  faqItems?: FAQItem[];
}

export function buildNeighborhoodStructuredData({
  canonical,
  neighborhoodName,
  pageTitle,
  description,
  faqItems = []
}: BuildNeighborhoodStructuredDataInput) {
  const baseUrl = 'https://sprinkleranddrains.com';
  const parts = canonical.replace(baseUrl, '').split('/').filter(Boolean);
  const citySlug = parts[0] || '';
  const cityName = citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: cityName, item: `${baseUrl}/${citySlug}` },
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
      url: baseUrl
    },
    areaServed: {
      '@type': 'Place',
      name: neighborhoodName
    }
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

  return faq ? [breadcrumbs, webpage, service, faq] : [breadcrumbs, webpage, service];
}
