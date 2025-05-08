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
  exclude: ['/server-sitemap.xml'],
}
