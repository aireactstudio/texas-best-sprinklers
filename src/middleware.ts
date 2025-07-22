import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware to inject performance-enhancing headers
 * - Cache-Control for static assets
 * - Content-Security-Policy for security
 * - Permissions-Policy for better privacy
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;

  // Redirect non-existent service pages to closest geographic location
  const serviceRedirects = {
    // Brock, TX -> Weatherford (closest location, ~15 miles)
    '/services/irrigation-repair/brock': '/services/irrigation-repair/weatherford',
    '/services/sprinkler-installation/brock': '/services/sprinkler-installation/weatherford', 
    '/services/drainage-solutions/brock': '/services/drainage-solutions/weatherford',
    '/services/outdoor-lighting/brock': '/services/outdoor-lighting/weatherford',
    '/services/maintenance/brock': '/services/maintenance/weatherford',
    
    // Cool, TX -> Weatherford (closest location, ~20 miles)
    '/services/irrigation-repair/cool': '/services/irrigation-repair/weatherford',
    '/services/sprinkler-installation/cool': '/services/sprinkler-installation/weatherford',
    '/services/drainage-solutions/cool': '/services/drainage-solutions/weatherford', 
    '/services/outdoor-lighting/cool': '/services/outdoor-lighting/weatherford',
    '/services/maintenance/cool': '/services/maintenance/weatherford',
  };

  // Check if current URL needs to be redirected
  if (serviceRedirects[url]) {
    return NextResponse.redirect(new URL(serviceRedirects[url], request.url), 301);
  }

  const response = NextResponse.next();

  // Append security headers to all responses
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Set appropriate caching headers based on content type
  if (url.includes('/assets/') || 
      url.includes('/_next/static/') || 
      url.includes('/images/') ||
      url.match(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/)) {
    // Static image assets - cache for longer periods
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (url.match(/\.(js|css)$/)) {
    // JS and CSS assets - cache but allow revalidation
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, stale-while-revalidate=86400'
    );
  } else if (url.match(/\.(woff|woff2|ttf|otf|eot)$/)) {
    // Font files - cache for longer periods
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (url === '/' || url.match(/^\/(fort-worth|weatherford|contact|services|blog|projects|about)$/)) {
    // Main pages - use shorter cache with revalidation
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
    );
  } else {
    // Default for other resources - moderate cache with revalidation
    response.headers.set(
      'Cache-Control',
      'public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200'
    );
  }
  
  return response;
}

// Configuration for the middleware
export const config = {
  // Apply these headers to all routes
  matcher: [
    // All paths except Next.js API routes and specific exception paths
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
