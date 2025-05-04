/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('./src/utils/bundle-analyzer');

// For tree-shaking and unused code elimination
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimisticClientCache: true,
    // Disabling turbotrace to avoid build warnings
    // serverMinification: true, // Removing unsupported option
  },
  
  // Image optimization settings
  images: {
    // Next.js image formats - prioritizing modern formats
    formats: ['image/avif', 'image/webp'],
    // Comprehensive device size coverage for responsive images
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384],
    // Using remotePatterns instead of deprecated domains
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4004',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 31536000, // 1 year for better caching
    dangerouslyAllowSVG: true, // Allow SVG for icons
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Script optimization is handled through dynamic imports instead

  
  // Ensure we can handle URLs with dots in them for potential filetypes
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Handle specific redirects for better UX
  async redirects() {
    return [
      {
        // Only redirect specific old service slugs that aren't valid anymore
        // The wildcard pattern needs to be more specific to avoid catching the base route
        source: '/services/:slug(irrigation|sprinklers|drainage|outdoor-lighting)/:subpath*',
        destination: '/services/:slug',
        permanent: false,
      },
    ];
  },
}

// Apply bundle analyzer wrapper
module.exports = withBundleAnalyzer(nextConfig)
