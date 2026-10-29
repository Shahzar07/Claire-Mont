import type { MetadataRoute } from 'next';
import { publishedPages } from '@/lib/pages';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    ...publishedPages.map((page) => ({
      url: `${base}${page.path}`,
      changeFrequency: 'monthly' as const,
      priority: page.path.split('/').length > 2 ? 0.6 : 0.8,
    })),
  ];
}
