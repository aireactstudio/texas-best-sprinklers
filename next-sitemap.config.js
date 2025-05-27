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
    '/services/sprinkler-repair/[location]',
    '/services/irrigation-repair/[location]',
    '/services/maintenance/[location]',
    '/services/lighting/[location]',
    '/services/drainage-solutions/[location]',
    '/services/sprinkler-installation/[location]',
    // Add other dynamic param routes as needed
  ],
}
