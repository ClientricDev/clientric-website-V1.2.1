/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://clientric.co',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://clientric.co/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
      {
        userAgent: '*',
        allow: ['/sitemap.xml', '/robots.txt'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom transform function for sitemap
    const priority = path === '/' ? 1.0 : 
                    path.startsWith('/services') ? 0.9 :
                    path.startsWith('/industries') ? 0.8 :
                    path.startsWith('/case-studies') ? 0.7 :
                    path.startsWith('/about') ? 0.6 :
                    path.startsWith('/contact') ? 0.8 : 0.5;

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}