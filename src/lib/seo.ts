import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/site';
import type { OgImageKey } from '@/lib/ogCard';

export const SITE_URL = 'https://sprinkleranddrains.com';

export function ogCardUrl(title: string, image: OgImageKey = 'default'): string {
  const params = new URLSearchParams({ title, img: image });
  return `${SITE_URL}/og?${params.toString()}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = 'default',
}: {
  title: string;
  description?: string;
  path: string;
  image?: OgImageKey;
}): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const card = ogCardUrl(title, image);
  const desc =
    description ??
    'Licensed sprinkler, drainage, and outdoor lighting service in Fort Worth, Weatherford, and surrounding North Texas cities. Call (817) 304-7896.';

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_CONFIG.fullName,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: card,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [card],
    },
  };
}

export function imageKeyForPath(path: string): OgImageKey {
  if (path.includes('southlake') || path.includes('outdoor-lighting') || path.includes('landscape-lighting')) {
    return 'lighting';
  }
  if (
    path.includes('drainage') ||
    path.includes('french-drain') ||
    path.includes('channel-drain') ||
    path.includes('sump')
  ) {
    return 'drainage';
  }
  if (path.includes('sod') || path.includes('leveling') || path.includes('land-leveling')) {
    return 'leveling';
  }
  if (path.includes('hardscap')) return 'hardscape';
  if (path.includes('landscap')) return 'landscaping';
  if (
    path.includes('sprinkler') ||
    path.includes('irrigation') ||
    path.includes('drip') ||
    path.includes('winter') ||
    path.includes('blow-out') ||
    path.includes('maintenance')
  ) {
    return 'sprinkler';
  }
  return 'default';
}
