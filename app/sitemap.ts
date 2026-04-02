import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/guides/cricket-in-the-philippines',
  '/beginners/getting-started',
  '/resources/playgrounds',
  '/clubs',
  '/compare/tape-ball-vs-hard-ball',
  '/shop/cricket-gear-philippines',
  '/shop/cricket-bats-philippines',
  '/shop/cricket-balls-philippines',
  '/shop/beginner-cricket-kits-philippines',
  '/shop/cricket-protective-gear-philippines',
  '/news/philippines-cricket-calendar',
  '/about-site',
  '/seo-work',
  '/roadmap',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://crick-in-ph-seo.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('/news/') ? 'daily' : route.startsWith('/shop/') ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route.startsWith('/guides/') || route.startsWith('/shop/') || route === '/seo-work'
          ? 0.9
          : 0.7,
  }));
}
