import React from 'react';
import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_IMAGE_KEYS = [
  'default',
  'lighting',
  'drainage',
  'sprinkler',
  'leveling',
  'hardscape',
  'landscaping',
] as const;

export type OgImageKey = (typeof OG_IMAGE_KEYS)[number];

type Background =
  | { type: 'local'; path: string }
  | { type: 'remote'; url: string };

const BACKGROUNDS: Record<OgImageKey, Background> = {
  default: {
    type: 'remote',
    url: 'https://imagedelivery.net/Hs1aBZ5UERW4OpkuLtKJ6A/b96197d9-8f69-4145-7b7b-0b5a7ba70900/public',
  },
  lighting: {
    type: 'local',
    path: 'public/assets/images/optimized/lighting/3419.jpg',
  },
  drainage: {
    type: 'remote',
    url: 'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/long-shot-of-fort-worth-drainage.webp?tr=w-1200,h-630,fo-center,q-75,f-jpg&updatedAt=1763144537900',
  },
  sprinkler: {
    type: 'remote',
    url: 'https://ik.imagekit.io/6j5o4uwvz/TexasBest_webp/sprinkler-head-rotating.webp?tr=w-1200,h-630,fo-center,q-75,f-jpg&updatedAt=1763144537912',
  },
  leveling: {
    type: 'local',
    path: 'public/assets/images/optimized/bobcat/bobcat-t450-front.jpg',
  },
  hardscape: {
    type: 'local',
    path: 'public/assets/images/optimized/hardscaping1.jpeg',
  },
  landscaping: {
    type: 'local',
    path: 'public/assets/images/optimized/landscaping/3248.jpg',
  },
};

export function isOgImageKey(value: string | null): value is OgImageKey {
  return !!value && (OG_IMAGE_KEYS as readonly string[]).includes(value);
}

async function backgroundSrc(key: OgImageKey): Promise<string> {
  const background = BACKGROUNDS[key];
  if (background.type === 'remote') return background.url;

  const buffer = await readFile(join(process.cwd(), background.path));
  const ext = background.path.endsWith('.png') ? 'png' : 'jpeg';
  return `data:image/${ext};base64,${buffer.toString('base64')}`;
}

export async function renderOgCard({
  title,
  kicker = 'Texas Best Sprinklers',
  image = 'default',
}: {
  title: string;
  kicker?: string;
  image?: OgImageKey;
}) {
  const src = await backgroundSrc(image);
  const fontSize = title.length > 56 ? 46 : title.length > 40 ? 52 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#0b1f38',
        }}
      >
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            background:
              'linear-gradient(to top, rgba(8,28,54,0.94) 0%, rgba(8,28,54,0.55) 48%, rgba(8,28,54,0.18) 100%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '56px 64px',
            width: '1200px',
            height: '630px',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#8ed48a',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              display: 'flex',
              color: 'white',
              fontSize,
              fontWeight: 800,
              lineHeight: 1.15,
              marginTop: 14,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
