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
    additionalSitemaps: [
      'https://sprinkleranddrains.com/server-sitemap.xml',
    ],
  },
  exclude: [
    '/server-sitemap.xml',
    // Exclude the old dynamic service location pages that were causing doorway page issues
    '/services/sprinkler-repair/[location]',
    '/services/irrigation-repair/[location]',
    '/services/maintenance/[location]',
    '/services/lighting/[location]',
    '/services/drainage-solutions/[location]',
    '/services/sprinkler-installation/[location]',
    // Exclude the dynamic location homepage template (but not the actual location pages)
    '/[location]',
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
