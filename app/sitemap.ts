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
  '/news/philippines-cricket-calendar',
  '/about-site',
  '/roadmap',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://example.com${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
