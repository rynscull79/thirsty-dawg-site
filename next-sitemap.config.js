/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.thirstydawgrentals.com',
  generateRobotsTxt: true,
  exclude: ['/admin', '/admin/*', '/header-test', '/not-found'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/admin/*', '/header-test', '/not-found'],
      },
    ],
  },
};
