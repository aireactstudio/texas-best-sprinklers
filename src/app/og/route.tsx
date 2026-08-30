import { NextRequest } from 'next/server';
import { isOgImageKey, renderOgCard } from '@/lib/ogCard';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get('title')?.trim() || 'Texas Best Sprinklers';
  const imgParam = request.nextUrl.searchParams.get('img');
  const image = isOgImageKey(imgParam) ? imgParam : 'default';

  const response = await renderOgCard({ title, image });
  response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');
  return response;
}
