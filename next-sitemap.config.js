/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sprinkleranddrains.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    // No additional sitemaps needed - using static generation only
  },
  exclude: [
    // Exclude utility pages and API routes
    '/debug-images',
    '/structured-data-preview',
    '/blog/[slug]',
    '/api/contact',
    '/api/reviews',
  ],
  // Add additional paths for all location homepages
  additionalPaths: async (config) => {
    // Core locations we serve - hardcoded to match the LOCATIONS array in src/data/locationData.ts
    const CORE_LOCATIONS = [
      'fort-worth',     // Main Office
      'keller',
      'roanoke',
      'saginaw',
      'watauga',
      'westlake',
      'grapevine',
      'northlake',
      'azle',
      'haltom-city',
      'weatherford',
      'argyle',
      'flower-mound',
      'southlake',
      'blue-mound',
      'haslet',
      'north-richland-hills'
    ];
    
    // Generate paths for all location homepages
    const locationHomepages = CORE_LOCATIONS.map((location) => ({
      loc: `/${location}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    return locationHomepages;
  },
}
