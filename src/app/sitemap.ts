import { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getBaseUrl() + '/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: getBaseUrl() + '/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getBaseUrl() + '/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: getBaseUrl() + '/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
