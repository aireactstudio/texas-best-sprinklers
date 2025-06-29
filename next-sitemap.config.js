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
    '/locations/[location]',
  ],
  // Add additional paths for all location homepages
  additionalPaths: async (config) => {
    // Core locations we serve - hardcoded to avoid import issues during sitemap generation
    const CORE_LOCATIONS = [
      'fort-worth', 'weatherford', 'arlington', 'keller', 'southlake', 'colleyville', 
      'grapevine', 'north-richland-hills', 'bedford', 'euless', 'hurst', 'mansfield', 
      'grand-prairie', 'haltom-city', 'watauga', 'benbrook', 'flower-mound', 'lewisville', 
      'coppell', 'irving', 'trophy-club', 'roanoke', 'westlake', 'azle', 'mineral-wells', 
      'annetta', 'brock', 'millsap', 'peaster', 'hudson-oaks', 'aledo', 'willow-park', 
      'springtown', 'cool'
    ];
    
    // Generate paths for all location homepages
    const locationHomepages = CORE_LOCATIONS.map((location) => ({
      loc: `/locations/${location}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    return locationHomepages;
  },
}
