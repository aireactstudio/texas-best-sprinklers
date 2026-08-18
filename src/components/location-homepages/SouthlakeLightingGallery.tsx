'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

const SOUTHLAKE_LIGHTING_PHOTOS = [
  {
    src: '/assets/images/optimized/lighting/3419.webp',
    alt: 'Southlake outdoor lighting: driveway lanterns, tree uplights, and a wall-washed white brick home',
    caption: 'Driveway lanterns and tree uplights at the entry',
  },
  {
    src: '/assets/images/optimized/lighting/3417.webp',
    alt: 'Southlake architectural lighting on a white brick home with chimney accents and a lit arched entry',
    caption: 'Chimney accents and a warm arched entry',
  },
  {
    src: '/assets/images/optimized/lighting/3418.webp',
    alt: 'Southlake LED wall-wash lighting along a white brick facade at twilight',
    caption: 'Even wall-wash columns along the brick',
  },
  {
    src: '/assets/images/optimized/lighting/3420.webp',
    alt: 'Southlake foundation uplights washing light brick and a black-framed window',
    caption: 'Foundation uplights in the planting bed',
  },
];

const southlakeLightingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Southlake outdoor lighting project',
  about: 'Architectural LED lighting on a white brick home in Southlake, TX',
  contentLocation: {
    '@type': 'Place',
    name: 'Southlake, TX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Southlake',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.9414,
      longitude: -97.1342,
    },
  },
  associatedMedia: SOUTHLAKE_LIGHTING_PHOTOS.map((photo) => ({
    '@type': 'ImageObject',
    contentUrl: `https://sprinkleranddrains.com${photo.src}`,
    description: photo.alt,
    contentLocation: {
      '@type': 'Place',
      name: 'Southlake, TX',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.9414,
        longitude: -97.1342,
      },
    },
  })),
};

export default function SouthlakeLightingGallery() {
  return (
    <section className="py-16 bg-slate-50">
      <Script id="ld-southlake-lighting" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(southlakeLightingSchema)}
      </Script>
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-irrigation-blue mb-3">
          Recent Outdoor Lighting in Southlake
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mb-8">
          Architectural LED lighting on a Southlake white-brick home: wall-washing, chimney and entry accents, tree
          uplights, and lantern-topped driveway pillars. See more of this work on our{' '}
          <Link href="/projects" className="font-semibold text-irrigation-blue hover:underline">
            projects page
          </Link>{' '}
          or request lighting for your property through{' '}
          <Link href="/services/outdoor-lighting" className="font-semibold text-irrigation-blue hover:underline">
            outdoor lighting services
          </Link>
          .
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {SOUTHLAKE_LIGHTING_PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative h-40 w-full sm:h-48 md:h-44">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={70}
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-gray-600">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
