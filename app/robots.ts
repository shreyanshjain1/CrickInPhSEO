import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://crick-in-ph-993tbhwit-shreyanshmanishjain-2649s-projects.vercel.app/sitemap.xml',
  };
}
