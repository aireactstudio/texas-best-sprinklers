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
  },
  exclude: ['/server-sitemap.xml'],
  // Optional: Add any specific URLs you want to prioritize or change frequencies for
  // Example:
  // additionalSitemaps: [
  //   'https://sprinkleranddrains.com/server-sitemap.xml',
  // ],
}
